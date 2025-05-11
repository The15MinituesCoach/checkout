import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "testimonials", className: "py-16 bg-neutral-lightest", children: _jsx("div", { className: "container-custom", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "relative inline-block mb-4", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-70 rounded-lg transform scale-105" }), _jsx("div", { className: "relative bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg", children: _jsx("h2", { className: "text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "Real Transformations from Real People" }) })] }), _jsx("p", { className: "text-lg text-neutral-darker", children: "See how the 15-Minute Breakthrough System has helped others reclaim their reality" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: testimonials.map((testimonial, index) => {
                            const bgColorClass = testimonial.color === "primary" ? "bg-primary/30" : "bg-secondary/30";
                            const textColorClass = testimonial.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
                            return (_jsx(Card, { className: "bg-white card-hover-effect shadow-md", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "flex items-center mb-4", children: _jsx("div", { className: "text-accent", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "h-4 w-4 inline-block fill-current" }, i))) }) }), _jsx("p", { className: "text-neutral-darker mb-4", children: testimonial.content }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `h-10 w-10 ${bgColorClass} rounded-full flex items-center justify-center ${textColorClass} font-medium mr-3`, children: testimonial.initials }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-neutral-darkest", children: testimonial.author }), _jsx("p", { className: "text-sm text-neutral-darker", children: testimonial.context })] })] })] }) }, index));
                        }) }), _jsx("div", { className: "mt-12 text-center", children: _jsx(Button, { asChild: true, className: "pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]", children: _jsxs("a", { href: "#pricing", className: "whitespace-nowrap", children: [_jsx("span", { className: "hidden sm:inline", children: "Join Thousands Who Have Reclaimed Their Reality" }), _jsx("span", { className: "sm:hidden", children: "Join Today" })] }) }) })] }) }) }));
}
