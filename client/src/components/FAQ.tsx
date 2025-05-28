import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to leave my relationship to benefit from this system?",
    answer: "No. This system works within your current reality. Whether you stay, create modified contact, or leave entirely, these tools help you reclaim your power and clarity in any scenario."
  },
  {
    question: "How is this different from other narcissism books?",
    answer: "Most resources only explain what narcissism is. This system gives you 32 concrete tools for immediate implementation, focused on what YOU can do, rather than trying to change the narcissist."
  },
  {
    question: "Do I need therapy alongside this system?",
    answer: "The system works well independently but can also complement therapy. We clearly indicate when professional support might be beneficial, particularly for safety concerns or severe trauma."
  },
  {
    question: "How quickly will I see results?",
    answer: "Many techniques provide immediate relief when implemented. The full transformation builds progressively as you consistently apply the tools that work best for your situation."
  },
  {
    question: "Is my purchase secure and private?",
    answer: "Absolutely. All transactions are processed through secure, encrypted systems. Your purchase information is never shared, and the product name on your credit card statement is discreet."
  },
  {
    question: "What format are the materials in?",
    answer: "All guides and tools are provided as downloadable PDF files that you can access on any device. You'll have instant access after purchase."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-darker">
              Get answers to common questions about the Narcissism Survival System
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 relative">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border border-neutral-light rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary/30"
              >
                <AccordionTrigger className="px-5 py-4 font-medium text-left hover:text-primary-dark transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-0 text-neutral-darker">
                  <div className="border-l-2 border-secondary/30 pl-3 animate-fade-in-up">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <div className="inline-block py-2 px-6 rounded-full bg-secondary/10 text-neutral-darker text-sm">
              Still have questions? Contact us at <span className="font-medium text-primary-dark">Support@The15minutesCoach.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
    </section>
  );
}
