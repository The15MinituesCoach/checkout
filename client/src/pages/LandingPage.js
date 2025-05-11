import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex flex-col min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { className: "flex-grow", children: [_jsx(Hero, {}), _jsx(ProblemRecognition, {}), _jsx(Solution, {}), _jsx(OfferBreakdown, {}), _jsx(HowItWorks, {}), _jsx(Promotion, {}), _jsx(Testimonials, {}), _jsx(FAQ, {}), _jsx(Guarantee, {}), _jsx(FinalCTA, {})] }), _jsx(Footer, {}), _jsx(MobileStickyCTA, {})] }));
}
