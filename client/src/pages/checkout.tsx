import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Check, Shield } from "lucide-react";
import { Link } from "wouter";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

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
      setErrorMessage("Stripe hasn't initialized yet.");
      setIsLoading(false);
      return;
    }

    try {
      await callApi("POST", "/api/create-payment-intent", {
        customerName: name,
        customerEmail: email,
        productId: "narcissism-survival-guide"
      });
    } catch {}

    const returnUrl = new URL(`${window.location.origin}/thank-you`);
    returnUrl.searchParams.append('payment_intent', paymentIntentId);
    returnUrl.searchParams.append('name', name);
    returnUrl.searchParams.append('email', email);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: returnUrl.toString() },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message ?? "An unknown error occurred");
    } else if (paymentIntent?.status === 'succeeded') {
      setSuccessMessage("Payment successful! Redirecting...");
      setTimeout(() => window.location.href = returnUrl.toString(), 2000);
    }
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <p className="text-xs mt-1">Receipt + download link will be sent here</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-medium mb-4">Payment Information</h3>
        <PaymentElement />
      </div>
      {errorMessage && <div className="text-red-500 bg-red-50 p-3 rounded-md">{errorMessage}</div>}
      {successMessage && <div className="text-green-600 bg-green-50 p-3 rounded-md">{successMessage}</div>}
      <div className="flex flex-col space-y-3">
        <Button type="submit" disabled={!stripe || isLoading} className="w-full py-3">
          {isLoading ? "Processing..." : "Complete Payment"}
        </Button>
        <div className="text-sm text-center">By purchasing you agree to Terms & Privacy Policy.</div>
      </div>
      <div className="flex justify-center items-center space-x-4 text-sm mt-4">
        <Shield className="h-4 w-4" /><span>Secure Payment</span><span>|</span><span>SSL Encrypted</span>
      </div>
    </form>
  );
};

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const res = await callApi("POST", "/api/create-payment-intent", {
          productId: "narcissism-survival-guide",
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
        setStripePromise(loadStripe(data.stripePublishableKey));
      } catch (err) {
        console.error("❌ Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPaymentIntent();
  }, []);

  if (isLoading || !stripePromise) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to home
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Purchase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Order Summary</h3>
              <div className="flex justify-between mb-2"><span>Narcissism Survival Guide:</span><span>$29.00</span></div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t"><span>Total:</span><span>$29.00</span></div>
            </div>
            <div className="mb-6 space-y-2">
              <div className="flex items-start"><Check className="h-5 w-5 mr-2" /><span>3 Comprehensive Guides</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 mr-2" /><span>32 Specialized Tools</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 mr-2" /><span>Immediate Delivery</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 mr-2" /><span>Lifetime Access</span></div>
            </div>
            <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
              <CheckoutForm paymentIntentId={paymentIntentId} />
            </Elements>
          </CardContent>
        </Card>
        <div className="text-center text-sm mt-6">
          Questions? <span className="text-black">Support@The15minutesCoach.com</span>
        </div>
      </div>
    </div>
  );
}
