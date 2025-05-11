import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
const affirmations = [
    "I am worthy of respect and healthy relationships.",
    "My feelings and perceptions are valid.",
    "I trust my intuition and inner wisdom.",
    "I deserve peace and emotional safety.",
    "I am reclaiming my personal power day by day.",
    "I set boundaries with confidence and clarity.",
    "I release what I cannot control and focus on my own journey.",
    "My needs and feelings matter just as much as anyone else's.",
    "I am creating a life filled with genuine connections.",
    "Each step I take toward healing is meaningful progress."
];
export default function MindfulnessPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [affirmation, setAffirmation] = useState("");
    useEffect(() => {
        // Set a random affirmation
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        setAffirmation(affirmations[randomIndex]);
        // Show the popup after a delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 7000); // Show after 7 seconds
        return () => clearTimeout(timer);
    }, []);
    return (_jsx(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: _jsxs(DialogContent, { className: "sm:max-w-md bg-white rounded-lg shadow-xl border border-gray-100", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "text-center text-2xl font-heading font-bold text-primary-dark", children: "Mindfulness Moment" }), _jsx(DialogDescription, { className: "text-center text-sm text-neutral-darker", children: "Take a deep breath and reflect on today's affirmation" })] }), _jsxs("div", { className: "py-6", children: [_jsx(Card, { className: "bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl shadow-inner border border-white", children: _jsxs("p", { className: "text-center text-xl font-medium text-neutral-darkest italic", children: ["\"", affirmation, "\""] }) }), _jsxs("div", { className: "mt-6 text-sm text-neutral-darker text-center space-y-3", children: [_jsx("p", { children: "Close your eyes and take three deep breaths while focusing on this affirmation." }), _jsx("p", { children: "Carry this thought with you as you continue your healing journey." })] })] }), _jsx(DialogFooter, { className: "sm:justify-center", children: _jsx(Button, { onClick: () => setIsOpen(false), className: "pill-button bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.05]", children: "Continue My Journey" }) })] }) }));
}
