import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { HandPointer, Clock, Heart } from "../components/ui/icons";
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
    return (_jsx("section", { id: "how-it-works", className: "py-16 bg-white", children: _jsx("div", { className: "container-custom", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "relative inline-block mb-4", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-70 rounded-lg transform scale-105" }), _jsx("div", { className: "relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg", children: _jsx("h2", { className: "text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "The 15-Minute Breakthrough Approach" }) })] }), _jsx("p", { className: "text-lg text-neutral-darker", children: "This system works within your current reality\u2014no fantasy scenarios or impossible demands." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: steps.map((step, index) => {
                            const IconComponent = step.icon;
                            const bgColorClass = step.color === "primary" ? "bg-primary/20" : "bg-secondary/20";
                            const textColorClass = step.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
                            return (_jsxs(Card, { className: "glassmorphism shadow-lg text-center card-hover-effect relative overflow-hidden border-2 border-transparent hover:border-accent/30 transform hover:scale-[1.02] transition-all duration-500 group", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" }), _jsx("div", { className: `absolute -right-20 -top-20 w-40 h-40 ${step.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-full blur-3xl group-hover:${step.color === "primary" ? "bg-primary/20" : "bg-secondary/20"} transition-all duration-700` }), _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: `h-20 w-20 flex items-center justify-center ${bgColorClass} ${textColorClass} rounded-full mb-6 mx-auto transform group-hover:scale-110 transition-all duration-500 shadow-md`, children: _jsx(IconComponent, { className: "h-8 w-8" }) }), _jsx("h3", { className: "text-xl font-heading font-bold text-neutral-darkest mb-3", children: step.title }), _jsx("p", { className: "text-neutral-darker", children: step.description })] })] }, index));
                        }) }), _jsxs("div", { className: "glassmorphism relative p-10 rounded-xl shadow-lg border-2 border-transparent hover:border-accent/30 transition-all duration-500 overflow-hidden group", children: [_jsx("div", { className: "absolute -right-24 -top-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700" }), _jsx("div", { className: "absolute -left-24 -bottom-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" }), _jsx("h3", { className: "text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-4 text-center", children: _jsx("span", { className: "bg-accent/20 text-accent-dark px-3 py-1 rounded-lg", children: "You don't need to implement everything at once" }) }), _jsx("p", { className: "text-neutral-darker mb-6 text-lg text-center", children: "Start where YOU need help most and build from there. Each small success creates momentum for the next, gradually transforming your experience without requiring dramatic life changes first." }), _jsx("div", { className: "mt-6 text-center", children: _jsx(Button, { asChild: true, className: "pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md text-lg hover:shadow-lg hover:scale-[1.02] pulse-animation", children: _jsxs("a", { href: "/npd/checkout", className: "whitespace-nowrap", children: [_jsx("span", { className: "hidden sm:inline", children: "Start Your 15-Minute Breakthrough Today" }), _jsx("span", { className: "sm:hidden", children: "Start Your Breakthrough" })] }) }) })] })] }) }) }));
}
