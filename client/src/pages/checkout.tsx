// ✅ Final Checkout.tsx
import { useStripe, Elements, PaymentElement, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { apiRequest } from "../lib/queryClient";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Check, Shield } from "lucide-react";
import { Link } from "wouter";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

// Stripe Public Key
const stripePromise = loadStripe("pk_live_51RKCOLDgUcTnVy3oHUsIr4nmoVIxvWgNczNedB8prKGn0noCveradGAemN4NAja63YL5txCVMW9BlwQo6UlEpfhC00iTUbU3vs");

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
  const fetchPaymentIntent = async () => {
    setIsLoading(true); // ✅ Show loader immediately

    try {
      const res = await apiRequest("POST", "https://checkout-api-pcz0.onrender.com/api/create-payment-intent", {
        customerName: name || "Anonymous",
        customerEmail: email || "anonymous@checkout.com",
        productId: "narcissism-survival-guide",
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
      setPaymentIntentId(data.paymentIntentId);
    } catch (err) {
      console.error("Error creating payment intent:", err);
    } finally {
      setIsLoading(false); // ✅ Hide loader after API finishes
    }
  };

  fetchPaymentIntent();
}, []);

  if (!stripePromise || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
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
            <OrderSummary />
            {clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  paymentIntentId={paymentIntentId}
                  name={name}
                  email={email}
                  setName={setName}
                  setEmail={setEmail}
                />
              </Elements>
            )}
          </CardContent>
        </Card>
        <div className="text-center text-sm text-neutral-darker">
          Questions? <span className="text-black hover:underline ml-2">Support@The15minutesCoach.com</span>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="mb-6 p-4 bg-secondary/10 rounded-lg">
      <h3 className="font-medium text-lg mb-2">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Narcissism Survival Guide:</span>
        <span>$0.50</span>
      </div>
      <div className="flex justify-between font-medium text-lg pt-2 border-t border-neutral-light">
        <span>Total:</span>
        <span className="text-green-600">$0.50</span>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-neutral-darker">
        <li><Check className="inline w-4 h-4 mr-2" />3 Comprehensive Guides</li>
        <li><Check className="inline w-4 h-4 mr-2" />32 Specialized Tools</li>
        <li><Check className="inline w-4 h-4 mr-2" />Immediate Digital Delivery</li>
        <li><Check className="inline w-4 h-4 mr-2" />Lifetime Access</li>
      </ul>
    </div>
  );
}

interface CheckoutFormProps {
  paymentIntentId: string;
  name: string;
  email: string;
  setName: (val: string) => void;
  setEmail: (val: string) => void;
}

function CheckoutForm({ paymentIntentId, name, email, setName, setEmail }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and a valid email.");
      setIsLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not ready. Please try again.");
      setIsLoading(false);
      return;
    }

    const returnUrl = `${window.location.origin}/npd/thank-you?payment_intent=${paymentIntentId}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: returnUrl },
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <p className="text-xs text-neutral-darker mt-1">Your purchase receipt and link will be sent here.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-medium mb-4">Payment Information</h3>
        <PaymentElement />
      </div>
      {errorMessage && <div className="text-red-600 bg-red-50 p-3 rounded">{errorMessage}</div>}
      <Button
  type="submit"
  className={`w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
  style={{ cursor: 'pointer', opacity: 1, pointerEvents: 'auto' }}
  disabled={isLoading || !stripe || !elements}
>
  {isLoading ? "Processing..." : "Complete Payment"}
</Button>
      <div className="flex justify-center items-center space-x-4 text-sm text-neutral-darker pt-4">
        <Shield className="h-4 w-4" />
        <span>Secure Payment</span><span>|</span><span>SSL Encrypted</span><span>|</span><span>60-Day Guarantee</span>
      </div>
    </form>
  );
}
