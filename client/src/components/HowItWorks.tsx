import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HandPointer, Clock, Heart } from "@/components/ui/icons";
import { Link } from "wouter";

const steps = [
  {
    icon: HandPointer,
    title: "Choose One Tool",
    description: "Select the tool that addresses your most urgent need right now",
    color: "primary"
  },
  {
    icon: Clock,
    title: "15 Minutes Daily",
    description: "Implement for just 15 minutes each day to build new patterns",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Feel Relief",
    description: "Experience immediate relief while building long-term change",
    color: "primary"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-70 rounded-lg transform scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg">
                <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  The 15-Minute Breakthrough Approach
                </h2>
              </div>
            </div>
            <p className="text-lg text-neutral-darker">
              This system works within your current reality—no fantasy scenarios or impossible demands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const bgColorClass = step.color === "primary" ? "bg-primary/20" : "bg-secondary/20";
              const textColorClass = step.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
              
              return (
                <Card key={index} className="glassmorphism shadow-lg text-center card-hover-effect relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className={`absolute -right-20 -top-20 w-40 h-40 ${step.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-full blur-3xl group-hover:${step.color === "primary" ? "bg-primary/20" : "bg-secondary/20"} transition-all duration-700`}></div>
                  <CardContent className="p-8">
                    <div className={`h-20 w-20 flex items-center justify-center ${bgColorClass} ${textColorClass} rounded-full mb-6 mx-auto transform group-hover:scale-110 transition-all duration-500 shadow-md`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-neutral-darkest mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-darker">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="glassmorphism relative p-10 rounded-xl shadow-lg border-2 border-transparent hover:border-accent/30 transition-all duration-500 overflow-hidden group">
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-4 text-center">
              <span className="bg-accent/20 text-accent-dark px-3 py-1 rounded-lg">You don't need to implement everything at once</span>
            </h3>
            
            <p className="text-neutral-darker mb-6 text-lg text-center">
              Start where YOU need help most and build from there. Each small success creates momentum for the next, gradually transforming your experience without requiring dramatic life changes first.
            </p>
            
            <div className="mt-6 text-center">
              <Button asChild className="pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md text-lg hover:shadow-lg hover:scale-[1.02] pulse-animation">
                              <Link href="/npd/checkout">
<Link href="/npd/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
    Start Your 15-Minute Breakthrough Today
  </a>
</Link>

</Link>

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
