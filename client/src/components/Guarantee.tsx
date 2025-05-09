import { Card, CardContent } from "../components/ui/card";
import { Shield, Lock, CreditCard } from "../components/ui/icons";

export default function Guarantee() {
  return (
    <section className="py-16 bg-neutral-lightest">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphism shadow-xl border-2 border-transparent hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
                <div className="md:w-1/3 flex-shrink-0 text-center">
                  <div className="h-36 w-36 mx-auto flex items-center justify-center bg-gradient-to-br from-accent/30 to-primary/30 text-primary-dark rounded-full mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-pulse-slow"></div>
                    <Shield className="h-20 w-20 drop-shadow-md relative z-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-darkest bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    60-Day Money Back Guarantee
                  </h3>
                </div>
                
                <div className="md:w-2/3">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-70 rounded-lg transform scale-105"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg">
                      <h3 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Your Success is Guaranteed
                      </h3>
                    </div>
                  </div>
                  <p className="text-neutral-darker mb-6 text-lg">
                    Try the complete Narcissism Survival System for 60 days. Implement the techniques and experience the difference for yourself. If you don't see meaningful improvement in how you navigate your relationship, simply email us for a complete refund.
                  </p>
                  <p className="font-medium text-neutral-darkest mb-8 text-xl border-l-4 border-accent pl-4 py-2">
                    We're that confident these tools will create real change in your life.
                  </p>
                  
                  <div className="flex flex-wrap gap-8 text-neutral-darker">
                    <div className="flex items-center group/item">
                      <div className="h-10 w-10 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full mr-3 shadow-md group-hover/item:scale-110 transition-transform duration-300">
                        <Lock className="h-5 w-5" />
                      </div>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center group/item">
                      <div className="h-10 w-10 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full mr-3 shadow-md group-hover/item:scale-110 transition-transform duration-300">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <span>All Major Cards Accepted</span>
                    </div>
                    <div className="flex items-center group/item">
                      <div className="h-10 w-10 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full mr-3 shadow-md group-hover/item:scale-110 transition-transform duration-300">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span>Privacy Protected</span>
                    </div>
                    <div className="flex items-center group/item">
                      <div className="h-10 w-10 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full mr-3 shadow-md group-hover/item:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <span>Quick Customer Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
