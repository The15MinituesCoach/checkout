import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/CountdownTimer";
import { Check } from "@/components/ui/icons";
import { Link } from "wouter";

export default function Promotion() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 relative overflow-hidden">
            <div className="text-center mb-8">
              <Badge variant="outline" className="inline-block px-6 py-2 bg-accent text-white rounded-full font-bold text-md mb-4 shadow-md transform hover:scale-105 transition-all">
                🔥 LIMITED TIME SPECIAL OFFER 🔥
              </Badge>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                01 Jun - World Narcissistic Abuse Awareness Day Special
              </h2>
              <p className="text-lg text-neutral-darker">
                In recognition of World Narcissistic Abuse Awareness Day (June 1st), we're making this complete system accessible to everyone who needs it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="glassmorphism bg-white/60 shadow-md border border-white/20 transform transition-all duration-500 hover:shadow-lg overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <CardContent className="p-6 relative">
                  <div className="text-center">
                    <p className="text-lg font-medium text-neutral-darker mb-2">Regular Price</p>
                    <p className="text-4xl font-bold text-red-500 mb-4 line-through">$79</p>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        <span>3 Comprehensive Guides</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        <span>32 Specialized Tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary-dark mt-1 mr-2" />
                        <span>Lifetime Access</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism bg-white/80 shadow-lg border-2 border-accent relative transform transition-all duration-500 hover:shadow-xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-700"></div>

                <CardContent className="p-6 relative">
                  <div className="text-center">
                    <Badge className="bg-accent text-white mb-2 font-semibold animate-pulse-subtle">SPECIAL OFFER</Badge>
                    <p className="text-lg font-medium text-neutral-darker mb-2">Limited-Time Price</p>
                    <p className="text-4xl font-bold text-green-500 mb-1">$29</p>
                    <p className="text-accent-dark font-medium mb-4">Save 63%</p>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                        <span>3 Comprehensive Guides</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                        <span>32 Specialized Tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                        <span>Lifetime Access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                        <span>60-Day Money-Back Guarantee</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="font-medium mb-2">This Offer Expires In:</p>
              <div className="flex justify-center mb-6">
                <CountdownTimer targetDate="June 4, 2025 23:59:59" />
              </div>
              
              <Button asChild className="pill-button bg-gradient-to-r from-accent to-secondary text-white py-4 px-8 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation">
<Link href="/npd/checkout">
  <a className="text-sm sm:text-lg md:text-xl flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center hover:shadow-lg hover:scale-[1.05]">
    <span className="hidden sm:inline">GET INSTANT ACCESS NOW - $29</span>
    <span className="sm:hidden">GET ACCESS - $29</span>
  </a>
</Link>

                <Link href="/npd/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
    Get Instant Access
  </a>
</Link>

              </Button>
              <p className="text-sm text-neutral-darker mt-3">Regular price $79 returns June 5th</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
