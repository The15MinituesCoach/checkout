import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, Shield } from "lucide-react";

export default function Community() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-secondary/20 text-secondary-dark px-4 py-1 rounded-full font-medium mb-4">
              NEW FEATURE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
              <span className="highlight-text">Join Our Supportive Community</span>
            </h2>
            <p className="text-lg text-neutral-darker max-w-3xl mx-auto">
              Connect with others who understand exactly what you're going through. Share experiences, strategies, and encouragement in a safe, moderated space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="floating-card glassmorphism relative overflow-hidden border-2 border-transparent hover:border-primary/30 transform hover:scale-[1.02] transition-all duration-500 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 flex items-center justify-center bg-primary/20 text-primary-dark rounded-full shadow-md">
                    <Users className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">
                  Peer Connection
                </h3>
                <p className="text-neutral-darker text-center">
                  Connect with others who truly understand your journey. No more feeling alone or isolated in your experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card glassmorphism relative overflow-hidden border-2 border-transparent hover:border-primary/30 transform hover:scale-[1.02] transition-all duration-500 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full shadow-md">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">
                  Private Forums
                </h3>
                <p className="text-neutral-darker text-center">
                  Access moderated discussion forums where you can share challenges, victories, and insights in a judgment-free environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="floating-card glassmorphism relative overflow-hidden border-2 border-transparent hover:border-primary/30 transform hover:scale-[1.02] transition-all duration-500 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 flex items-center justify-center bg-accent/20 text-accent-dark rounded-full shadow-md">
                    <Heart className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">
                  Healing Together
                </h3>
                <p className="text-neutral-darker text-center">
                  Accelerate your healing journey through collective wisdom and mutual support from others who've walked similar paths.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <div className="glassmorphism max-w-xl mx-auto p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-secondary/20 text-secondary-dark rounded-full mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-darkest">Community Guidelines</h3>
              </div>
              
              <p className="text-neutral-darker mb-4 relative z-10">
                Our community spaces are carefully moderated and maintain strict guidelines to ensure a safe, supportive, and respectful environment for everyone's healing journey.
              </p>
              
              <div className="text-sm text-neutral-darker font-medium">
                <Badge variant="outline" className="mr-2 mb-2 bg-primary/10 text-primary-dark">Safe Space</Badge>
                <Badge variant="outline" className="mr-2 mb-2 bg-secondary/10 text-secondary-dark">Confidential</Badge>
                <Badge variant="outline" className="mr-2 mb-2 bg-accent/10 text-accent-dark">Supportive</Badge>
                <Badge variant="outline" className="mr-2 mb-2 bg-primary/10 text-primary-dark">Trauma-Informed</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}