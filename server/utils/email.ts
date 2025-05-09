import nodemailer from 'nodemailer';

// Create Hostinger SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'noreply@yourdomain.com', // Update with your Hostinger email
    pass: process.env.SMTP_PASSWORD || 'your-smtp-password', // Update with your Hostinger email password
  },
});

/**
 * Send purchase confirmation email to specified addresses
 * @param purchaseData - Customer and purchase information
 */
export async function sendPurchaseConfirmation(purchaseData: {
  customerName: string;
  customerEmail: string;
  productName: string;
  transactionId: string;
  purchaseDate: Date;
  amount: string;
}) {
  const { customerName, customerEmail, productName, transactionId, purchaseDate, amount } = purchaseData;
  
  // Format date nicely
  const formattedDate = purchaseDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Email content
  const emailContent = {
    from: `"15-Minute Breakthrough System" <${process.env.SMTP_USER || 'noreply@yourdomain.com'}>`,
    to: [
      'support@The15minutesCoach.com',
      'conscogindia@gmail.com'
    ].join(','),
    subject: `New Purchase: ${productName}`,
    text: `
New Purchase Information

Customer: ${customerName}
Email: ${customerEmail}
Product: ${productName}
Transaction ID: ${transactionId}
Purchase Date: ${formattedDate}
Amount: ${amount}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #4a5568; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Purchase Notification</h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Customer:</strong> ${customerName}</p>
    <p><strong>Email:</strong> ${customerEmail}</p>
    <p><strong>Product:</strong> ${productName}</p>
    <p><strong>Transaction ID:</strong> ${transactionId}</p>
    <p><strong>Purchase Date:</strong> ${formattedDate}</p>
    <p><strong>Amount:</strong> ${amount}</p>
  </div>
  
  <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <p style="margin: 0; color: #718096;">This is an automated notification. Please do not reply to this email.</p>
  </div>
</div>
    `,
  };

  try {
    const info = await transporter.sendMail(emailContent);
    console.log('Purchase confirmation email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending purchase confirmation email:', error);
    return false;
  }
}

/**
 * Send purchase receipt to customer
 * @param purchaseData - Customer and purchase information
 * @param downloadLink - Secure link to download purchased product
 */
export async function sendCustomerReceipt(
  purchaseData: {
    customerName: string;
    customerEmail: string;
    productName: string;
    transactionId: string;
    purchaseDate: Date;
    amount: string;
  },
  downloadLink: string
) {
  const { customerName, customerEmail, productName, transactionId, purchaseDate, amount } = purchaseData;
  
  // Format date nicely
  const formattedDate = purchaseDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Email content
  const emailContent = {
    from: `"15-Minute Breakthrough System" <${process.env.SMTP_USER || 'noreply@yourdomain.com'}>`,
    to: customerEmail,
    subject: `Your Purchase: ${productName}`,
    text: `
Thank you for your purchase!

Dear ${customerName},

Thank you for purchasing the ${productName}. Your transaction has been completed successfully.

Transaction Details:
- Product: ${productName}
- Transaction ID: ${transactionId}
- Purchase Date: ${formattedDate}
- Amount: ${amount}

You can download your purchase using the following link:
${downloadLink}

This link is for your personal use only and will expire in 24 hours.

If you have any questions, please contact us at support@The15minutesCoach.com.

Thank you for your purchase!

Warm regards,
The 15-Minute Breakthrough System Team
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #4a5568; text-align: center;">Thank You for Your Purchase!</h2>
  
  <div style="margin: 20px 0;">
    <p>Dear ${customerName},</p>
    
    <p>Thank you for purchasing the <strong>${productName}</strong>. Your transaction has been completed successfully.</p>
    
    <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #4a5568;">Transaction Details</h3>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Transaction ID:</strong> ${transactionId}</p>
      <p><strong>Purchase Date:</strong> ${formattedDate}</p>
      <p><strong>Amount:</strong> ${amount}</p>
    </div>
    
    <p>You can download your purchase using the following link:</p>
    
    <div style="text-align: center; margin: 25px 0;">
      <a href="${downloadLink}" style="background-color: #4299e1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Download Your Purchase</a>
    </div>
    
    <p style="font-size: 0.9em; color: #718096;">This link is for your personal use only and will expire in 24 hours.</p>
    
    <p>If you have any questions, please contact us at <a href="mailto:support@The15minutesCoach.com">support@The15minutesCoach.com</a>.</p>
    
    <p>Thank you for your purchase!</p>
    
    <p>Warm regards,<br>
    The 15-Minute Breakthrough System Team</p>
  </div>
  
  <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px; text-align: center;">
    <p style="margin: 0; color: #718096; font-size: 0.8em;">This is an automated email. Please do not reply to this message.</p>
  </div>
</div>
    `,
  };

  try {
    const info = await transporter.sendMail(emailContent);
    console.log('Customer receipt email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending customer receipt email:', error);
    return false;
  }
}

// Verify email configuration is working
export async function verifyEmailSetup() {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
}