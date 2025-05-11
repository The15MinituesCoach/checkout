import Header from "../components/Header"; 
import Hero from "../components/Hero";
import ProblemRecognition from "../components/ProblemRecognition";
import Solution from "../components/Solution";
import Promotion from "../components/Promotion";
import OfferBreakdown from "../components/OfferBreakdown";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Guarantee from "../components/Guarantee";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemRecognition />
        <Solution />
        <OfferBreakdown />
        <HowItWorks />
        <Promotion />
        <Testimonials />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
