import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Lock, 
  Shield, 
  MessageSquare, 
  Heart, 
  User, 
  Road
} from "@/components/ui/icons";

const pillars = [
  {
    icon: Lock,
    title: "Reality Lock™",
    description: "End gaslighting and trust your perceptions again with validated reality-anchoring techniques.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Personal Perimeter Plan™",
    description: "Create boundaries that actually stick, even with resistant individuals in your life.",
    color: "secondary"
  },
  {
    icon: MessageSquare,
    title: "Toxic Talk Control™",
    description: "Stop manipulative conversations before they drain you using pattern interruption methods.",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Empathy Shield™",
    description: "Protect your emotional energy while maintaining healthy connections with others.",
    color: "secondary"
  },
  {
    icon: User,
    title: "Identity Reinforcement™",
    description: "Rediscover who you are beyond the relationship and reclaim your authentic self.",
    color: "primary"
  },
  {
    icon: Road,
    title: "Future Framework™",
    description: "Create a clear path forward on your terms, regardless of what others choose to do.",
    color: "secondary"
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block p-1.5 bg-gradient-to-r from-primary to-secondary rounded-lg mb-4">
            <div className="bg-white/90 backdrop-blur rounded-md px-6 py-3">
              <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                The 6-Pillar System: Your Roadmap to Freedom
              </h2>
            </div>
          </div>
          <p className="text-lg text-neutral-darker">
            This isn't just another book explaining what narcissism is. It's a complete action system with 32 specialized tools designed for immediate implementation and relief.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const bgColorClass = pillar.color === "primary" ? "bg-primary/20" : "bg-secondary/20";
            const textColorClass = pillar.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
            
            return (
              <Card key={index} className={`bg-white card-hover-effect animate-fade-in-up animate-delay-${index % 3}00`}>
                <CardContent className="p-6 text-center">
                  <div className={`h-16 w-16 flex items-center justify-center ${bgColorClass} ${textColorClass} rounded-full mb-6 mx-auto`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-neutral-darkest mb-3">
                    <span className="animated-underline">{pillar.title}</span>
                  </h3>
                  <p className="text-neutral-darker">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-neutral-light">
          <h3 className="text-2xl font-heading font-semibold text-neutral-darkest mb-4 text-center">
            Transform Your Life With Just 15 Minutes Per Day
          </h3>
          <p className="text-neutral-darker text-center mb-6">
            All with just 15 minutes of focused implementation each day.
          </p>
          <div className="text-center">
            <Button asChild className="pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation">
              <Link href="/npd/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
                Get Your Complete System Now – $29
  </a>
</Link>

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
