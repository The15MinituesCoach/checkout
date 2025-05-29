import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const stripePromise = loadStripe('pk_live_51RKCOLDgUcTnVy3oHUsIr4nmoVIxvWgNczNedB8prKGn0noCveradGAemN4NAja63YL5txCVMW9BlwQo6UlEpfhC00iTUbU3vs');

function CheckoutForm({ clientSecret, paymentIntentId }: { clientSecret: string, paymentIntentId: string }) {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    if (!stripe || !elements) {
      setError("Stripe not initialized.");
      setIsProcessing(false);
      return;
    }

    const returnUrl = `${window.location.origin}/thank-you`;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    if (result.error) {
      setError(result.error.message || "Payment failed.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label>Your Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <PaymentElement />
      </div>
      {error && <p className="text-red-500">{error}</p>}
     <Button 
  type="submit" 
  disabled={!stripe || isProcessing}
  className="w-full bg-blue-600 text-white"
  style={{ cursor: 'pointer', opacity: 1 }}
>
  {isProcessing ? "Processing..." : "Complete Payment"}
</Button>

    </form>
  );
}


export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');

  useEffect(() => {
    fetch("https://checkout-api-pcz0.onrender.com/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerEmail: "test@example.com",
        customerName: "Test Buyer",
        productId: "narcissism-survival-guide",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
      });
  }, []);

  if (!clientSecret) {
    return <div className="text-center p-10 text-red-600">Loading Stripe...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
            <CheckoutForm clientSecret={clientSecret} paymentIntentId={paymentIntentId} />
          </Elements>
        </CardContent>
      </Card>
    </div>
  );
}
