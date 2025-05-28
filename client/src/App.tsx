import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import OnboardingAnimation from "@/components/OnboardingAnimation";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/not-found";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/thank-you";
function Router() {
  return (
    <WouterRouter base="/npd">
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <OnboardingAnimation />
        {/* ❌ <MindfulnessPopup /> completely removed */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
