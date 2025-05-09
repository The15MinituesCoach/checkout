import { Link, useLocation } from "wouter";
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
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Process payment success if we have a payment intent ID
    if (paymentIntentId) {
      processPaymentSuccess();
    }
  }, [paymentIntentId]);

  const processPaymentSuccess = async () => {
    if (!paymentIntentId) return;
    
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
      } else {
        setHasError(true);
        toast({
          title: "Download preparation failed",
          description: data.message || "Please check your email for the download link or contact support.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error processing payment success:", error);
      setHasError(true);
      toast({
        title: "Error preparing download",
        description: "Please check your email for the download link or contact support.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 py-10">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <Card className="glassmorphism mb-8">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl font-heading mb-2">Thank You For Your Purchase!</CardTitle>
            <p className="text-neutral-darker">Your order has been successfully processed.</p>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <div className="p-6 bg-secondary/10 rounded-lg">
                <h3 className="font-medium text-xl mb-4">Your Narcissism Survival Guide</h3>
                <p className="mb-6">
                  Your materials are ready for immediate download. You'll also receive an email with these download links.
                </p>
                
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-6">
                    <RefreshCw className="h-8 w-8 text-primary animate-spin mb-4" />
                    <p>Preparing your download...</p>
                  </div>
                ) : hasError ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                      <p className="text-red-700">
                        We couldn't prepare your download right now, but don't worry! 
                        An email with your download link has been sent to your inbox.
                      </p>
                    </div>
                    <Button 
                      className="w-full md:w-auto pill-button bg-gradient-to-r from-primary to-secondary text-white"
                      onClick={processPaymentSuccess}
                    >
                      <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                    </Button>
                    <div className="mt-3">
                      <p className="text-sm text-neutral-dark">
                        If you continue having issues, please contact <span className="font-medium">Support@The15minutesCoach.com</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button 
                      className="w-full md:w-auto pill-button bg-gradient-to-r from-accent to-secondary text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
                      asChild={!!downloadUrl}
                      onClick={downloadUrl ? undefined : processPaymentSuccess}
                    >
                      {downloadUrl ? (
                        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" /> Download Complete Guide
                        </a>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" /> Download Complete Guide
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full md:w-auto"
                      asChild
                    >
                      <a href="mailto:support@The15minutesCoach.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="mr-2 h-4 w-4" /> Request Bonus Materials
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3">What's Next?</h3>
                <p className="mb-4">
                  Start with "The First Steps" guide to begin your healing journey. Remember to set aside 15 minutes each day for best results.
                </p>
                
                <div className="flex justify-center gap-4 flex-wrap mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" /> Return to Homepage
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-sm text-neutral-darker">
          <p>Questions? <a href="mailto:Support@The15minutesCoach.com" className="text-black hover:underline ml-2">Support@The15minutesCoach.com</a></p>
        </div>
      </div>
    </div>
  );
};