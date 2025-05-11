import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Lock, Shield, MessageSquare, Heart, User, Road } from "../components/ui/icons";
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
    return (_jsx("section", { id: "solution", className: "py-16 bg-gradient-to-br from-primary/10 to-secondary/10", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [_jsx("div", { className: "inline-block p-1.5 bg-gradient-to-r from-primary to-secondary rounded-lg mb-4", children: _jsx("div", { className: "bg-white/90 backdrop-blur rounded-md px-6 py-3", children: _jsx("h2", { className: "text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary", children: "The 6-Pillar System: Your Roadmap to Freedom" }) }) }), _jsx("p", { className: "text-lg text-neutral-darker", children: "This isn't just another book explaining what narcissism is. It's a complete action system with 32 specialized tools designed for immediate implementation and relief." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: pillars.map((pillar, index) => {
                        const IconComponent = pillar.icon;
                        const bgColorClass = pillar.color === "primary" ? "bg-primary/20" : "bg-secondary/20";
                        const textColorClass = pillar.color === "primary" ? "text-primary-dark" : "text-secondary-dark";
                        return (_jsx(Card, { className: `bg-white card-hover-effect animate-fade-in-up animate-delay-${index % 3}00`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: `h-16 w-16 flex items-center justify-center ${bgColorClass} ${textColorClass} rounded-full mb-6 mx-auto`, children: _jsx(IconComponent, { className: "h-8 w-8" }) }), _jsx("h3", { className: "text-xl font-heading font-semibold text-neutral-darkest mb-3", children: _jsx("span", { className: "animated-underline", children: pillar.title }) }), _jsx("p", { className: "text-neutral-darker", children: pillar.description })] }) }, index));
                    }) }), _jsxs("div", { className: "mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-neutral-light", children: [_jsx("h3", { className: "text-2xl font-heading font-semibold text-neutral-darkest mb-4 text-center", children: "Transform Your Life With Just 15 Minutes Per Day" }), _jsx("p", { className: "text-neutral-darker text-center mb-6", children: "All with just 15 minutes of focused implementation each day." }), _jsx("div", { className: "text-center", children: _jsx(Button, { asChild: true, className: "pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-8 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation", children: _jsx("a", { href: "/npd/checkout", className: "text-sm sm:text-lg flex items-center justify-center", children: "Get Your Complete System Now \u2013 $29" }) }) })] })] }) }));
}
