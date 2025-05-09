import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star } from "../components/ui/icons";

const testimonials = [
  {
    content: "After years in a relationship where I constantly questioned my own memory and perception, the Reality Lock technique helped me trust myself again. I implemented it for just 15 minutes each day, and within two weeks, I stopped apologizing for things I didn't do. This system gave me the tools to stand firm in my own reality.",
    author: "Jennifer M.",
    context: "Romantic Relationship",
    initials: "JM",
    color: "primary"
  },
  {
    content: "As the child of a narcissistic parent, I spent decades trying to earn approval that never came. The Non-Negotiables Map helped me establish boundaries that actually stuck. I was amazed that I could implement these techniques without dramatic confrontations. For the first time, I feel like I have control over our interactions.",
    author: "David R.",
    context: "Parent-Child Relationship",
    initials: "DR",
    color: "secondary"
  },
  {
    content: "My boss would constantly change priorities and then blame me when things weren't done. The Pattern Interrupt Technique changed everything. I can now redirect conversations back to documented agreements without creating conflict. I've received my first positive performance review in years, and my anxiety about work has dramatically decreased.",
    author: "Lauren T.",
    context: "Workplace Relationship",
    initials: "LT",
    color: "primary"
  },
  {
    content: "Co-parenting with my ex seemed impossible. Every exchange was a battleground that left me emotionally drained. The Emotional Energy Audit and ready-to-use scripts transformed our interactions. I'm no longer exhausted after each communication, and our children no longer have to witness tense exchanges. This system works even when the other person doesn't change.",
    author: "Michael K.",
    context: "Co-Parenting Situation",
    initials: "MK",
    color: "secondary"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-neutral-lightest">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-70 rounded-lg transform scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg">
                <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Real Transformations from Real People
                </h2>
              </div>
            </div>
            <p className="text-lg text-neutral-darker">
              See how the 15-Minute Breakthrough System has helped others reclaim their reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const bgColorClass = testimonial.color === "primary" ? "bg-primary/30" : "bg-secondary/30";
              const textColorClass = testimonial.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
              
              return (
                <Card key={index} className="bg-white card-hover-effect shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 inline-block fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-darker mb-4">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 ${bgColorClass} rounded-full flex items-center justify-center ${textColorClass} font-medium mr-3`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-medium text-neutral-darkest">{testimonial.author}</p>
                        <p className="text-sm text-neutral-darker">{testimonial.context}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
              <a href="#pricing" className="whitespace-nowrap">
                <span className="hidden sm:inline">Join Thousands Who Have Reclaimed Their Reality</span>
                <span className="sm:hidden">Join Today</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
