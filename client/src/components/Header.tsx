import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Menu } from "../components/ui/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="relative bg-white/95 backdrop-blur-sm shadow-sm z-40 sticky top-0">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-heading font-bold">
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-30 rounded-lg transform scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg px-5 py-2 shadow-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle">
                  Narcissism Survival Guide: The 15-Minute Breakthrough System
                </span>
              </div>
            </div>
            <div className="md:hidden flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-30 rounded-lg transform scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg px-4 py-2 shadow-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle">
                  Narcissism Survival Guide
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle">
                  The 15-Minute Breakthrough System
                </span>
              </div>
            </div>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="#how-it-works" 
                  className="text-neutral-darker hover:text-primary-dark transition font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#testimonials" 
                  className="text-neutral-darker hover:text-primary-dark transition font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  Testimonials
                </a>
                <a 
                  href="#faq" 
                  className="text-neutral-darker hover:text-primary-dark transition font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="/npd/checkout" 
                  className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
                  onClick={() => setOpen(false)}
                >
                  Get Instant Access
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-neutral-darker hover:text-primary-dark transition font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-neutral-darker hover:text-primary-dark transition font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-neutral-darker hover:text-primary-dark transition font-medium">
              FAQ
            </a>
            <a href="/npd/checkout" className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.05]">
              Get Instant Access
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
