import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { className: "pt-14 pb-16 bg-white", id: "problem", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [_jsxs("div", { className: "relative inline-block mb-8", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 rounded-lg transform scale-105" }), _jsx("div", { className: "relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg px-8 py-4 shadow-xl", children: _jsx("h2", { className: "text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse-subtle", children: "You're Not Imagining It" }) })] }), _jsxs("p", { className: "text-lg text-neutral-darker mb-8", children: ["If you recognize these experiences, you're not alone. And most importantly: ", _jsx("span", { className: "highlight-text", children: "You're not crazy." })] })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: symptoms.map((symptom, index) => (_jsxs(Card, { className: `glassmorphism card-hover-effect flex animate-fade-in-up animate-delay-${index % 3}00 relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group`, children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" }), _jsx("div", { className: "absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" }), _jsxs(CardContent, { className: "p-6 flex z-10", children: [_jsx("div", { className: "mr-4 text-primary text-xl mt-1 group-hover:scale-110 transition-transform duration-300", children: _jsx(CheckCircle, { className: "h-5 w-5" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-neutral-darkest mb-2", children: symptom.title }), _jsx("p", { className: "text-neutral-darker", children: symptom.description })] })] })] }, index))) }), _jsx("div", { className: "mt-12 text-center", children: _jsx(Button, { asChild: true, variant: "link", className: "text-primary-dark hover:text-primary font-medium inline-flex items-center", children: _jsxs("a", { href: "#solution", children: [_jsx("span", { children: "Discover the solution that addresses all of these issues" }), _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }) }) })] }) }));
}
