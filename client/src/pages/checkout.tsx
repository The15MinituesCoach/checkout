import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Check, Shield } from "lucide-react";
import { Link } from "wouter";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
//if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  //throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
//}
//const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
//Added 06 May 2025
// 👇 INSERT THIS RIGHT BELOW THE IMPORTS
const API_BASE_URL = "https://checkout-api-pcz0.onrender.com";

export async function callApi(method: string, path: string, data?: any) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response;
}
interface CheckoutFormProps {
  paymentIntentId: string;
}

const CheckoutForm = ({ paymentIntentId }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // Validate form
    if (!name.trim()) {
      setErrorMessage("Please enter your name");
      setIsLoading(false);
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setIsLoading(false);
      setErrorMessage("Stripe hasn't initialized yet. Please try again.");
      return;
    }

    // Update the payment intent with customer information
    try {
      await callApi("POST", "/api/create-payment-intent", {
        customerName: name,
        customerEmail: email,
        productId: "narcissism-survival-guide"
      });
    } catch (error) {
      console.error("Error updating payment intent:", error);
      // Continue despite the error to avoid blocking checkout
    }

    // Build redirect URL with customer information
    const returnUrl = new URL(`${window.location.origin}/thank-you`);
    returnUrl.searchParams.append('payment_intent', paymentIntentId);
    returnUrl.searchParams.append('name', name);
    returnUrl.searchParams.append('email', email);
    
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl.toString(),
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      setIsLoading(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setSuccessMessage("Payment successful! Redirecting to your materials...");
      setTimeout(() => {
        window.location.href = returnUrl.toString();
      }, 2000);
    } else {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-xs text-neutral-darker mt-1">
            Your purchase receipt and download link will be sent to this email
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-medium mb-4">Payment Information</h3>
        <PaymentElement />
      </div>
      
      {errorMessage && (
        <div className="text-red-500 bg-red-50 p-3 rounded-md">
          {errorMessage}
        </div>
      )}
      
      {successMessage && (
        <div className="text-green-600 bg-green-50 p-3 rounded-md">
          {successMessage}
        </div>
      )}
      
      <div className="flex flex-col space-y-3">
        <Button 
          type="submit" 
          disabled={!stripe || isLoading}
          className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-6 font-medium transition-all duration-300 shadow-md text-lg hover:shadow-lg hover:scale-[1.01]"
        >
          {isLoading ? "Processing..." : "Complete Payment"}
        </Button>
        
        <div className="text-sm text-center text-neutral-darker">
          By completing your purchase, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-4 text-sm text-neutral-darker">
        <Shield className="h-4 w-4" />
        <span>Secure Payment</span>
        <span>|</span>
        <span>SSL Encrypted</span>
        <span>|</span>
        <span>60-Day Guarantee</span>
      </div>
    </form>
  );
};
export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const stripePromise = loadStripe("pk_live_51RKCOLDgUcTnVy3oHUsIr4nmoVIxvWgNczNedB8prKGn0noCveradGAemN4NAja63");

  // ✅ no stripeKey check needed anymore
  if (!stripePromise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-bold text-center p-6">
        Stripe key failed to initialize. Please contact support.
      </div>
    );
  }
  
useEffect(() => {
  const fetchPaymentIntent = async () => {
    try {
      const res = await callApi("POST", "/api/create-payment-intent", {
        productId: "narcissism-survival-guide",
      });
      const data = await res.json();
      console.log("✅ PaymentIntent response:", data);
      setClientSecret(data.clientSecret);
      setPaymentIntentId(data.paymentIntentId);
    } catch (err) {
      console.error("❌ Error creating payment intent:", err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchPaymentIntent(); // 👈 Call the async function
}, []);
  // 🔴 Move the error check here
  if (!stripePromise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-bold text-center p-6">
        Stripe key failed to initialize. Please contact support.
      </div>
    );
  }
  

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 py-10">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
        
        <Card className="glassmorphism mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Complete Your Purchase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-secondary/10 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Narcissism Survival Guide:</span>
                <span>$29.00</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t border-neutral-light">
                <span>Total:</span>
                <span className="text-green-600">$29.00</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                  <span>3 Comprehensive Guides</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                  <span>32 Specialized Tools</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                  <span>Immediate Digital Delivery</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                  <span>Lifetime Access to All Materials</span>
                </div>
              </div>
            </div>
            
            {clientSecret ? (
              <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
                <CheckoutForm paymentIntentId={paymentIntentId} />
              </Elements>
            ) : (
              <div className="text-red-500 p-4 border border-red-200 rounded-md">
                Unable to initialize payment. Please try again or contact support.
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="text-center text-sm text-neutral-darker">
          <p>Questions? <span className="text-black hover:underline ml-2">Support@The15minutesCoach.com</span></p>
        </div>
      </div>
    </div>
  );
};