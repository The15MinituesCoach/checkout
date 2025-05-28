import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useEffect, useState } from "react";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
import {
  CheckCircle,
  Download,
  Home,
  Mail,
  RefreshCw,
  FileText,
  BookOpen,
  Heart,
  Wrench,
  ListOrdered,
  List
} from "lucide-react";


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
      const response = await apiRequest("POST", "https://checkout-api-pcz0.onrender.com/payment-success", {
        paymentIntentId,
        customerName,
        customerEmail
      });
      console.log("Response:", response)//log files
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
                <h3 className="font-medium text-xl mb-4">🎉 You're In — Your Healing Journey Starts Now</h3>
                <p className="mb-6">
                  Your full Narcissism Survival System is ready to download. We've also sent the link to your inbox so you can return anytime.
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

<div className="bg-white/80 rounded-lg shadow-md p-6 border border-neutral-200 text-left">
  <h3 className="text-lg font-semibold mb-4 flex items-center">
    <Download className="w-5 h-5 text-accent mr-2" />
    What’s Included in Your Download
  </h3>
  <ul className="space-y-3 text-sm text-neutral-dark pl-1">
    <li className="flex items-start">
      <FileText className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>Quick Start Guide:</strong> Get immediate relief in just 15 minutes a day.</span>
    </li>
    <li className="flex items-start">
      <BookOpen className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>Complete System Guide:</strong> The full 6-pillar roadmap to clarity, boundaries, and recovery.</span>
    </li>
    <li className="flex items-start">
      <Heart className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>Trauma-Calibrated Companion:</strong> Adjust the system gently to your pace and emotional needs.</span>
    </li>
    <li className="flex items-start">
      <ListOrdered className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>Master Index – System:</strong> Navigate the entire course content with ease.</span>
    </li>
    <li className="flex items-start">
      <List className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>Master Index – Tools:</strong>A complete map of all 32 support tools, organized by the six core pillars to guide your recovery step by step.</span>
    </li>
    <li className="flex items-start">
      <Wrench className="w-4 h-4 text-primary mr-2 mt-[2px]" />
      <span><strong>32 Specialized Support Tools:</strong> Includes journals, scripts, assessments, and boundary planners.</span>
    </li>
  </ul>
</div>

             
<a
  href={downloadUrl || "#"}
  download
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    if (!downloadUrl) {
      e.preventDefault();
      alert("Your download link is not ready yet.");
    }
  }}
  className="w-full md:w-auto inline-block"
>
  <Button
    className="pill-button bg-gradient-to-r from-accent to-secondary text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] w-full md:w-auto"
  >
    <Download className="mr-2 h-4 w-4" />
    Download Complete Guide
  </Button>
</a>


                  </div>
                )}
              </div>
              
              <div>
               <h3 className="font-medium text-lg mb-3">What’s Next?</h3>
<p className="mb-4">
  There’s no one right way to begin — trust yourself and start with whatever feels most helpful today. Each tool is here to support your growth, one step at a time. Even 15 minutes a day can lead to real, lasting transformation. You’ve already taken the hardest step — keep going.
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