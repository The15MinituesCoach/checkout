import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Download, Home, Mail, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
export default function ThankYou() {
    // Get query params from window.location since useLocation() returns a tuple
    const params = window.location.search.substring(1);
    const urlParams = new URLSearchParams(params);
    const paymentIntentId = urlParams.get("payment_intent");
    const customerName = urlParams.get("name") || "Customer";
    const customerEmail = urlParams.get("email") || "";
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [hasError, setHasError] = useState(false);
    const { toast } = useToast();
    useEffect(() => {
        // Process payment success if we have a payment intent ID
        if (paymentIntentId) {
            processPaymentSuccess();
        }
    }, [paymentIntentId]);
    const processPaymentSuccess = async () => {
        if (!paymentIntentId)
            return;
        setLoading(true);
        try {
            const response = await apiRequest("POST", "/api/payment-success", {
                paymentIntentId,
                customerName,
                customerEmail
            });
            const data = await response.json();
            if (data.success && data.downloadUrl) {
                setDownloadUrl(data.downloadUrl);
                toast({
                    title: "Success!",
                    description: "Your download is ready!",
                    variant: "default",
                });
            }
            else {
                setHasError(true);
                toast({
                    title: "Download preparation failed",
                    description: data.message || "Please check your email for the download link or contact support.",
                    variant: "destructive",
                });
            }
        }
        catch (error) {
            console.error("Error processing payment success:", error);
            setHasError(true);
            toast({
                title: "Error preparing download",
                description: "Please check your email for the download link or contact support.",
                variant: "destructive",
            });
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-background to-background/90 py-10", children: _jsxs("div", { className: "container max-w-3xl mx-auto px-4 text-center", children: [_jsxs(Card, { className: "glassmorphism mb-8", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(CheckCircle, { className: "h-16 w-16 text-green-500" }) }), _jsx(CardTitle, { className: "text-3xl font-heading mb-2", children: "Thank You For Your Purchase!" }), _jsx("p", { className: "text-neutral-darker", children: "Your order has been successfully processed." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "p-6 bg-secondary/10 rounded-lg", children: [_jsx("h3", { className: "font-medium text-xl mb-4", children: "Your Narcissism Survival Guide" }), _jsx("p", { className: "mb-6", children: "Your materials are ready for immediate download. You'll also receive an email with these download links." }), loading ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-6", children: [_jsx(RefreshCw, { className: "h-8 w-8 text-primary animate-spin mb-4" }), _jsx("p", { children: "Preparing your download..." })] })) : hasError ? (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg text-left", children: _jsx("p", { className: "text-red-700", children: "We couldn't prepare your download right now, but don't worry! An email with your download link has been sent to your inbox." }) }), _jsxs(Button, { className: "w-full md:w-auto pill-button bg-gradient-to-r from-primary to-secondary text-white", onClick: processPaymentSuccess, children: [_jsx(RefreshCw, { className: "mr-2 h-4 w-4" }), " Try Again"] }), _jsx("div", { className: "mt-3", children: _jsxs("p", { className: "text-sm text-neutral-dark", children: ["If you continue having issues, please contact ", _jsx("span", { className: "font-medium", children: "Support@The15minutesCoach.com" })] }) })] })) : (_jsxs("div", { className: "space-y-4", children: [_jsx(Button, { className: "w-full md:w-auto pill-button bg-gradient-to-r from-accent to-secondary text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]", asChild: !!downloadUrl, onClick: downloadUrl ? undefined : processPaymentSuccess, children: downloadUrl ? (_jsxs("a", { href: downloadUrl, target: "_blank", rel: "noopener noreferrer", children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), " Download Complete Guide"] })) : (_jsxs(_Fragment, { children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), " Download Complete Guide"] })) }), _jsx(Button, { variant: "outline", className: "w-full md:w-auto", asChild: true, children: _jsxs("a", { href: "mailto:support@The15minutesCoach.com", target: "_blank", rel: "noopener noreferrer", children: [_jsx(Mail, { className: "mr-2 h-4 w-4" }), " Request Bonus Materials"] }) })] }))] }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-lg mb-3", children: "What's Next?" }), _jsx("p", { className: "mb-4", children: "Start with \"The First Steps\" guide to begin your healing journey. Remember to set aside 15 minutes each day for best results." }), _jsx("div", { className: "flex justify-center gap-4 flex-wrap mt-6", children: _jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { href: "/", children: [_jsx(Home, { className: "mr-2 h-4 w-4" }), " Return to Homepage"] }) }) })] })] }) })] }), _jsx("div", { className: "text-sm text-neutral-darker", children: _jsxs("p", { children: ["Questions? ", _jsx("a", { href: "mailto:Support@The15minutesCoach.com", className: "text-black hover:underline ml-2", children: "Support@The15minutesCoach.com" })] }) })] }) }));
}
;
