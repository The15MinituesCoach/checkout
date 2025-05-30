import { useStripe, Elements, PaymentElement, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { apiRequest } from "../lib/queryClient";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Check, Shield } from "lucide-react";
import { Link } from "wouter";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

// Stripe setup
const stripePromise = loadStripe("pk_live_51RKCOLDgUcTnVy3oHUsIr4nmoVIxvWgNczNedB8prKGn0noCveradGAemN4NAja63YL5txCVMW9BlwQo6UlEpfhC00iTUbU3vs");

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);

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

            {clientSecret ? (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm name={name} email={email} />
              </Elements>
            ) : (
              <BasicForm
                setClientSecret={setClientSecret}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
              />
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

function BasicForm({
  setClientSecret,
  name,
  setName,
  email,
  setEmail
}: {
  setClientSecret: (val: string) => void;
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleStartPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage("Please enter a valid name and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await apiRequest("POST", "https://checkout-api-pcz0.onrender.com/api/create-payment-intent", {
        customerEmail: email,
        customerName: name,
        productId: "narcissism-survival-guide"
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (err) {
      setErrorMessage("Failed to initiate payment.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleStartPayment} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="text-xs text-neutral-darker mt-1">
            Your purchase receipt and link will be sent here.
          </p>
        </div>
      </div>
      {errorMessage && <div className="text-red-600 bg-red-50 p-3 rounded">{errorMessage}</div>}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Loading Stripe..." : "Continue to Payment"}
      </Button>
    </form>
  );
}

function CheckoutForm({ name, email }: { name: string; email: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    const returnUrl = `${window.location.origin}/npd/thank-you?payment_intent=placeholder&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: returnUrl }
    });

    if (error) {
      setError(error.message || "An unknown error occurred.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <PaymentElement />
      {error && <div className="text-red-600 bg-red-50 p-3 rounded">{error}</div>}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Processing..." : "Complete Payment"}
      </Button>
      <div className="flex justify-center items-center space-x-4 text-sm text-neutral-darker pt-4">
        <Shield className="h-4 w-4" />
        <span>Secure Payment</span><span>|</span><span>SSL Encrypted</span><span>|</span><span>60-Day Guarantee</span>
      </div>
    </form>
  );
}
