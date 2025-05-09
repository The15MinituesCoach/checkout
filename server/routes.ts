import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { sendPurchaseConfirmation, sendCustomerReceipt } from "./utils/email";
import { generateDownloadUrl, verifyDownloadToken } from "./utils/download";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

// Use any supported Stripe API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16" as any,
});

// Product information interface
interface Product {
  name: string;
  price: number;
  filename: string;
  filePath: string;
}

// Product information mapping
const PRODUCTS: Record<string, Product> = {
  'narcissism-survival-guide': {
    name: 'Narcissism Survival Guide: The 15-Minute Breakthrough System',
    price: 2900, // in cents ($29.00)
    filename: 'narcissism-survival-guide.pdf',
    filePath: path.resolve(__dirname, '../protected-assets/narcissism-survival-guide.pdf')
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Stripe payment route for one-time payments
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { customerName, customerEmail, productId = 'narcissism-survival-guide' } = req.body;

      // Get product details
      const product = PRODUCTS[productId];
      if (!product) {
        return res.status(400).json({ message: "Invalid product" });
      }
      
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: product.price,
        currency: "usd",
        receipt_email: customerEmail,
        metadata: {
          productId,
          customerName,
          customerEmail
        },
      });
      
      res.json({ 
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res
        .status(500)
        .json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Webhook to handle Stripe events
  app.post('/api/stripe-webhook', async (req, res) => {
    const payload = req.body;
    
    try {
      // Process the event
      switch (payload.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = payload.data.object;
          console.log('Payment succeeded:', paymentIntent.id);
          
          // Extract customer and product information
          const { productId, customerName, customerEmail } = paymentIntent.metadata;
          const product = PRODUCTS[productId];
          
          if (!product || !customerEmail) {
            console.error('Missing product or customer information');
            break;
          }
          
          // Generate secure download URL
          const baseUrl = process.env.BASE_URL || 'https://www.the15minutescoach.com';
          const downloadUrl = generateDownloadUrl(productId, customerEmail, baseUrl);
          
          // Send confirmation emails
          const purchaseDate = new Date();
          const amount = `$${(product.price / 100).toFixed(2)} USD`;
          
          // Email to admin/sales team
          await sendPurchaseConfirmation({
            customerName: customerName || 'Customer',
            customerEmail,
            productName: product.name,
            transactionId: paymentIntent.id,
            purchaseDate,
            amount
          });
          
          // Email to customer with download link
          await sendCustomerReceipt({
            customerName: customerName || 'Customer',
            customerEmail,
            productName: product.name,
            transactionId: paymentIntent.id,
            purchaseDate,
            amount
          }, downloadUrl);
          
          break;
        default:
          console.log(`Unhandled event type: ${payload.type}`);
      }
      
      res.json({ received: true });
    } catch (error: any) {
      console.error('Webhook error:', error);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  });

  // Endpoint to process payment success and return download link
  app.post('/api/payment-success', async (req, res) => {
    try {
      const { paymentIntentId, customerName, customerEmail } = req.body;
      
      // Verify payment was successful by checking with Stripe
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      
      if (paymentIntent.status !== 'succeeded') {
        return res.status(400).json({ 
          success: false, 
          message: 'Payment has not been completed' 
        });
      }
      
      // Get product information from payment intent metadata
      const productId = paymentIntent.metadata.productId || 'narcissism-survival-guide';
      const product = PRODUCTS[productId];
      
      if (!product) {
        return res.status(400).json({ 
          success: false, 
          message: 'Product not found' 
        });
      }
      
      // Generate secure download URL
      const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
      const downloadUrl = generateDownloadUrl(productId, customerEmail, baseUrl);
      
      // Send confirmation emails if not already sent from webhook
      const purchaseDate = new Date();
      const amount = `$${(product.price / 100).toFixed(2)} USD`;
      
      // Email to admin/sales team
      await sendPurchaseConfirmation({
        customerName: customerName || 'Customer',
        customerEmail,
        productName: product.name,
        transactionId: paymentIntentId,
        purchaseDate,
        amount
      });
      
      // Email to customer with download link
      await sendCustomerReceipt({
        customerName: customerName || 'Customer',
        customerEmail,
        productName: product.name,
        transactionId: paymentIntentId,
        purchaseDate,
        amount
      }, downloadUrl);
      
      // Return success response with download URL
      res.json({
        success: true,
        downloadUrl,
        message: 'Thank you for your purchase! An email with your download link has also been sent to your inbox.'
      });
      
    } catch (error: any) {
      console.error('Payment success processing error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error processing payment success' 
      });
    }
  });

  // Secure download endpoint
  app.get('/api/download/:token', async (req, res) => {
    const { token } = req.params;
    
    // Verify download token
    const fileInfo = verifyDownloadToken(token);
    
    if (!fileInfo) {
      return res.status(404).send('Download link expired or invalid');
    }
    
    const { filePath, fileName } = fileInfo;
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found');
    }
    
    // Set appropriate headers for download
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'application/pdf');
    
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });

  // Add route to handle SMTP configuration verification
  app.get('/api/verify-email-config', (req, res) => {
    // This would be an admin-only endpoint in production
    res.json({
      smtpHost: process.env.SMTP_HOST || 'smtp.hostinger.com',
      smtpPort: process.env.SMTP_PORT || '465',
      smtpUser: process.env.SMTP_USER ? '(configured)' : '(not configured)',
      smtpPassword: process.env.SMTP_PASSWORD ? '(configured)' : '(not configured)'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
