import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, ArrowRight } from "../components/ui/icons";

const symptoms = [
  {
    title: "Constantly Questioning Yourself",
    description: "You doubt your memories and perceptions, wondering if you're remembering events correctly."
  },
  {
    title: "Exhausting Arguments",
    description: "Simple disagreements turn into exhausting, circular arguments with no resolution."
  },
  {
    title: "Walking on Eggshells",
    description: "You carefully monitor what you say and do to avoid criticism or negative reactions."
  },
  {
    title: "Emotional Depletion",
    description: "Your emotional energy is completely drained after interactions, leaving you exhausted."
  },
  {
    title: "Identity Loss",
    description: "You've gradually lost connection with who you really are and what matters to you."
  },
  {
    title: "Boundary Struggles",
    description: "Setting boundaries feels impossible or triggers intense backlash when you try."
  }
];

export default function ProblemRecognition() {
  return (
    <section className="pt-14 pb-16 bg-white" id="problem">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 rounded-lg transform scale-105"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg px-8 py-4 shadow-xl">
              <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle">
                You're Not Imagining It
              </h2>
            </div>
          </div>
          <p className="text-lg text-neutral-darker mb-8">
            If you recognize these experiences, you're not alone. And most importantly: <span className="highlight-text">You're not crazy.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <Card key={index} className={`glassmorphism card-hover-effect flex animate-fade-in-up animate-delay-${index % 3}00 relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              <CardContent className="p-6 flex z-10">
                <div className="mr-4 text-primary text-xl mt-1 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-darkest mb-2">{symptom.title}</h3>
                  <p className="text-neutral-darker">{symptom.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-primary-dark hover:text-primary font-medium inline-flex items-center">
            <a href="#solution">
              <span>Discover the solution that addresses all of these issues</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
