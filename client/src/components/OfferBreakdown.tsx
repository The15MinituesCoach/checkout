import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  FileText, 
  FileIcon, 
  BookOpen, 
  Map, 
  Pause, 
  Battery, 
  ListChecks,
  Check,
  Lock,
  Shield
} from "@/components/ui/icons";

const powerfulTools = [
  {
    icon: BookOpen,
    title: "The Truth Journal Method",
    description: "End gaslighting with this powerful documentation system that prevents reality distortion and rebuilds trust in your perceptions.",
    color: "primary"
  },
  {
    icon: Map,
    title: "Non-Negotiables Map",
    description: "Define and enforce your most critical boundaries with specific responses that actually work—even with highly resistant individuals.",
    color: "secondary"
  },
  {
    icon: Pause,
    title: "Pattern Interrupt Technique",
    description: "Stop toxic conversation patterns before they trap you in circular arguments that leave you feeling confused and depleted.",
    color: "primary"
  },
  {
    icon: Battery,
    title: "Emotional Energy Audit",
    description: "Identify exactly where your energy is being drained and implement immediate protection strategies to preserve your emotional resources.",
    color: "secondary"
  },
  {
    icon: ListChecks,
    title: "Strategic Implementation Framework",
    description: "Transform overwhelming changes into manageable steps with clear timing and resources for creating meaningful change at your own pace.",
    color: "primary"
  }
];

export default function OfferBreakdown() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 rounded-lg transform scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg px-8 py-4 shadow-xl">
                <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle">
                  Everything You'll Receive Today
                </h2>
              </div>
            </div>
            <p className="text-lg text-neutral-darker max-w-2xl mx-auto">
              Your complete Narcissism Survival System includes everything you need to reclaim your reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 transform hover:scale-[1.01] transition-all duration-500">
            <div>
              <div className="relative mb-8 overflow-hidden rounded-lg">
                <img 
                  src="/npd/attached_assets/cover.png" 
                  alt="Narcissism Survival Guide" 
                  className="rounded-lg shadow-lg h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 glassmorphism py-2 px-4 rounded-full">
                  <span className="text-sm font-medium text-primary-dark">Instant Digital Download</span>
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="bg-gradient-to-r from-primary to-secondary/70 text-white px-4 py-1 rounded-lg shadow-md inline-block transform hover:scale-105 transition-transform duration-300">
                  THREE COMPREHENSIVE GUIDES:
                </span>
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">Narcissism Survival Guide: The 15-Minute Breakthrough System</p>
                    <p className="text-neutral-darker text-sm">Complete 6-Pillar approach with step-by-step implementation</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">Trauma-Calibrated Companion System</p>
                    <p className="text-neutral-darker text-sm">Personalization tools designed for trauma histories</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">Quick Start Guide</p>
                    <p className="text-neutral-darker text-sm">Fast implementation pathways for immediate relief</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="relative mb-8 overflow-hidden rounded-lg">
                <img 
                  src="/npd/attached_assets/templates.png" 
                  alt="Specialized Tools" 
                  className="rounded-lg shadow-lg h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 glassmorphism py-2 px-4 rounded-full">
                  <span className="text-sm font-medium text-primary-dark">Printable & Editable</span>
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3">
                <span className="bg-gradient-to-r from-secondary to-accent/70 text-white px-4 py-1 rounded-lg shadow-md inline-block transform hover:scale-105 transition-transform duration-300">
                  32 SPECIALIZED TOOLS:
                </span>
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">12 Assessment and Tracking Worksheets</p>
                    <p className="text-neutral-darker text-sm">Measure your progress and document patterns</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">8 Ready-to-Use Script Templates</p>
                    <p className="text-neutral-darker text-sm">Handle difficult conversations with confidence</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">6 Implementation Journals</p>
                    <p className="text-neutral-darker text-sm">Track your boundaries and progress over time</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 text-secondary-dark">
                    <FileIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-darkest">6 Decision-Making Frameworks</p>
                    <p className="text-neutral-darker text-sm">Navigate complex situations with clarity</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-primary/30 to-secondary/30 blur-lg opacity-70 rounded-lg transform scale-105"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    Powerful Tools That Create Immediate Change
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {powerfulTools.map((tool, index) => {
                const IconComponent = tool.icon;
                const bgColorClass = tool.color === "primary" ? "bg-primary/20" : "bg-secondary/20";
                const textColorClass = tool.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
                
                return (
                  <Card key={index} className={`floating-card glassmorphism animate-fade-in-up animate-delay-${index % 3}00 relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                    <div className={`absolute -right-20 -top-20 w-40 h-40 ${tool.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-full blur-3xl group-hover:${tool.color === "primary" ? "bg-primary/20" : "bg-secondary/20"} transition-all duration-700`}></div>
                    <CardContent className="p-6">
                      <div className={`h-14 w-14 flex items-center justify-center ${bgColorClass} ${textColorClass} rounded-full mb-4 shadow-md transform group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h4 className="font-heading font-semibold text-neutral-darkest mb-2 text-lg">
                        <span className="animated-underline">{tool.title}</span>
                      </h4>
                      <p className="text-neutral-darker">{tool.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
              
              <div className="floating-card glassmorphism p-6 relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
                <div className="text-center z-10 relative">
                  <div className="h-14 w-14 mx-auto flex items-center justify-center bg-accent/20 text-accent-dark rounded-full mb-4 shadow-md transform group-hover:scale-110 transition-all duration-500">
                    <span className="text-xl font-bold">+27</span>
                  </div>
                  <p className="font-heading font-semibold text-neutral-darkest mb-3 text-lg">Plus 27 more specialized tools</p>
                  <p className="text-neutral-darker mb-4">Each designed to address specific challenges you're facing right now</p>
                  
                  <div className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-lg mt-2 mb-4">
                    <div className="bg-white rounded-md p-3 flex items-center">
                      <div className="bg-secondary/20 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-dark">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-darkest">Lifetime Access to Updates</span>
                        <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2 shadow-sm">BONUS</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild variant="secondary" className="pill-button bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.05]">
                    <a href="">
                      See The Complete System
                    </a>
                    
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="glassmorphism relative overflow-hidden transform hover:scale-[1.01] transition-all duration-500 border-2 border-transparent hover:border-accent/20">
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent to-secondary text-white px-4 py-2 font-medium text-sm rounded-bl-lg shadow-md">
              Limited Offer
            </div>
            <CardContent className="p-8 pt-12">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent animate-pulse-subtle">
                      Get Your Complete System Today
                    </span>
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="line-through text-red-500 font-medium mr-2">$79</span>
                    <span className="text-2xl font-bold text-green-600">Only $29</span>
                    <Badge variant="outline" className="ml-2 bg-accent/20 text-accent-dark px-2 py-1 rounded text-sm font-medium">
                      Save 63%
                    </Badge>
                  </div>
                  <ul className="space-y-2 mb-6">
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
                      <span>Immediate Digital Delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                      <span>Lifetime Access to All Materials</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary-dark mt-1 mr-2" />
                      <span>60-Day Money-Back Guarantee</span>
                    </li>

                  </ul>
                  <div className="md:hidden text-center mb-6">
                    <Button asChild className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-6 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation">
                      <Link href="/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
   Get System Now – $29
  </a>
</Link>

                    </Button>
                    <p className="text-sm text-neutral-darker mt-2">Regular price $79 returns June 5th</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-darker">
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-2 text-secondary" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-secondary" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-secondary" />
                      <span>60-Day Guarantee</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex flex-col">
                    <Button asChild className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-4 px-6 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation">
                      <Link href="/checkout">
<Link href="/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
    Get Your Complete System Now
  </a>
</Link>

</Link>

                    </Button>
                    <p className="text-sm text-neutral-darker mt-2 text-center">Regular price $79 returns June 5th</p>
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
