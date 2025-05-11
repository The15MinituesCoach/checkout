import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export async function callApi(method, path, data) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response;
}
const CheckoutForm = ({ paymentIntentId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
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
        }
        catch (error) {
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
        }
        else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setSuccessMessage("Payment successful! Redirecting to your materials...");
            setTimeout(() => {
                window.location.href = returnUrl.toString();
            }, 2000);
        }
        else {
            setIsLoading(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "name", children: "Your Name" }), _jsx(Input, { id: "name", type: "text", placeholder: "Full Name", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "Your Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx("p", { className: "text-xs text-neutral-darker mt-1", children: "Your purchase receipt and download link will be sent to this email" })] })] }), _jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: [_jsx("h3", { className: "font-medium mb-4", children: "Payment Information" }), _jsx(PaymentElement, {})] }), errorMessage && (_jsx("div", { className: "text-red-500 bg-red-50 p-3 rounded-md", children: errorMessage })), successMessage && (_jsx("div", { className: "text-green-600 bg-green-50 p-3 rounded-md", children: successMessage })), _jsxs("div", { className: "flex flex-col space-y-3", children: [_jsx(Button, { type: "submit", disabled: !stripe || isLoading, className: "w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-6 font-medium transition-all duration-300 shadow-md text-lg hover:shadow-lg hover:scale-[1.01]", children: isLoading ? "Processing..." : "Complete Payment" }), _jsx("div", { className: "text-sm text-center text-neutral-darker", children: "By completing your purchase, you agree to our Terms of Service and Privacy Policy." })] }), _jsxs("div", { className: "flex justify-center items-center space-x-4 text-sm text-neutral-darker", children: [_jsx(Shield, { className: "h-4 w-4" }), _jsx("span", { children: "Secure Payment" }), _jsx("span", { children: "|" }), _jsx("span", { children: "SSL Encrypted" }), _jsx("span", { children: "|" }), _jsx("span", { children: "60-Day Guarantee" })] })] }));
};
export default function Checkout() {
    const [clientSecret, setClientSecret] = useState("");
    const [paymentIntentId, setPaymentIntentId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const stripePromise = loadStripe("pk_live_51RKCOLDgUcTnVy3oHUsIr4nmoVIxvWgNczNedB8prKGn0noCveradGAemN4NAja63");
    // ✅ no stripeKey check needed anymore
    if (!stripePromise) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center text-red-600 font-bold text-center p-6", children: "Stripe key failed to initialize. Please contact support." }));
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
            }
            catch (err) {
                console.error("❌ Error creating payment intent:", err);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchPaymentIntent(); // 👈 Call the async function
    }, []);
    // 🔴 Move the error check here
    if (!stripePromise) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center text-red-600 font-bold text-center p-6", children: "Stripe key failed to initialize. Please contact support." }));
    }
    if (isLoading) {
        return (_jsx("div", { className: "h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full", "aria-label": "Loading" }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-background to-background/90 py-10", children: _jsxs("div", { className: "container max-w-3xl mx-auto px-4", children: [_jsx("div", { className: "mb-6", children: _jsxs(Link, { href: "/", className: "inline-flex items-center text-primary hover:text-primary/80 transition-colors", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to home"] }) }), _jsxs(Card, { className: "glassmorphism mb-8", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-2xl font-heading", children: "Complete Your Purchase" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-6 p-4 bg-secondary/10 rounded-lg", children: [_jsx("h3", { className: "font-medium text-lg mb-2", children: "Order Summary" }), _jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { children: "Narcissism Survival Guide:" }), _jsx("span", { children: "$29.00" })] }), _jsxs("div", { className: "flex justify-between font-medium text-lg pt-2 border-t border-neutral-light", children: [_jsx("span", { children: "Total:" }), _jsx("span", { className: "text-green-600", children: "$29.00" })] })] }), _jsx("div", { className: "mb-6", children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-secondary-dark mt-1 mr-2" }), _jsx("span", { children: "3 Comprehensive Guides" })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-secondary-dark mt-1 mr-2" }), _jsx("span", { children: "32 Specialized Tools" })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-secondary-dark mt-1 mr-2" }), _jsx("span", { children: "Immediate Digital Delivery" })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Check, { className: "h-5 w-5 text-secondary-dark mt-1 mr-2" }), _jsx("span", { children: "Lifetime Access to All Materials" })] })] }) }), clientSecret ? (_jsx(Elements, { stripe: stripePromise, options: { clientSecret, appearance: { theme: 'stripe' } }, children: _jsx(CheckoutForm, { paymentIntentId: paymentIntentId }) })) : (_jsx("div", { className: "text-red-500 p-4 border border-red-200 rounded-md", children: "Unable to initialize payment. Please try again or contact support." }))] })] }), _jsx("div", { className: "text-center text-sm text-neutral-darker", children: _jsxs("p", { children: ["Questions? ", _jsx("span", { className: "text-black hover:underline ml-2", children: "Support@The15minutesCoach.com" })] }) })] }) }));
}
;
