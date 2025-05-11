import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { Badge } from "../components/ui/badge";
import { ChevronRight, ChevronLeft, Heart, Shield, Sun, Sparkles, } from "lucide-react";
const journeyStages = [
    {
        id: 1,
        title: "Awareness",
        description: "Recognizing patterns of narcissistic behavior and their impact on your life.",
        duration: "Week 1-2",
        icon: Sparkles,
        color: "from-blue-500 to-purple-500",
        progress: 0,
    },
    {
        id: 2,
        title: "Validation",
        description: "Validating your experiences and feelings as real and important.",
        duration: "Week 3-4",
        icon: Heart,
        color: "from-purple-500 to-pink-500",
        progress: 25,
    },
    {
        id: 3,
        title: "Boundaries",
        description: "Learning to establish and maintain healthy boundaries.",
        duration: "Week 5-6",
        icon: Shield,
        color: "from-pink-500 to-orange-500",
        progress: 50,
    },
    {
        id: 4,
        title: "Healing",
        description: "Reclaiming your sense of self and rebuilding your life on your terms.",
        duration: "Week 7-8",
        icon: Sun,
        color: "from-orange-500 to-yellow-500",
        progress: 75,
    }
];
export default function HealingJourneyTracker() {
    const [selectedStage, setSelectedStage] = useState(0);
    const [userProgress, setUserProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    // Navigate to previous stage
    const prevStage = () => {
        if (selectedStage > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedStage(selectedStage - 1);
                setIsAnimating(false);
            }, 300);
        }
    };
    // Navigate to next stage
    const nextStage = () => {
        if (selectedStage < journeyStages.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedStage(selectedStage + 1);
                setIsAnimating(false);
            }, 300);
        }
    };
    // Update user progress when slider is moved
    const handleSliderChange = (value) => {
        setUserProgress(value[0]);
    };
    // Current stage details
    const currentStage = journeyStages[selectedStage];
    const IconComponent = currentStage.icon;
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-heading font-bold mb-6", children: "Your Healing Journey Progress" }), _jsx("p", { className: "text-lg text-neutral-darker", children: "Visualize your path to healing with our 15-minute daily system. Explore each stage and see how our tools help you progress." })] }), _jsxs("div", { className: "relative pb-10", children: [_jsx("div", { className: "absolute top-0 left-0 w-full flex items-center justify-between py-4 px-8 z-10", children: _jsxs("div", { className: "w-full h-2 bg-gray-200 rounded-full relative", children: [_jsx("div", { className: "absolute h-2 bg-gradient-to-r from-primary to-secondary rounded-full", style: { width: `${journeyStages[selectedStage].progress}%` } }), journeyStages.map((stage, index) => (_jsx("div", { className: `absolute w-6 h-6 rounded-full flex items-center justify-center -mt-2 cursor-pointer transition-all duration-300 ${index <= selectedStage
                                            ? "bg-gradient-to-r from-primary to-secondary text-white"
                                            : "bg-white border-2 border-gray-300 text-gray-500"}`, style: { left: `calc(${stage.progress}% - 12px)` }, onClick: () => setSelectedStage(index), children: index + 1 }, stage.id)))] }) }), _jsxs(Card, { className: "mt-16 glassmorphism relative overflow-hidden border-transparent hover:border-primary/20 transition-all duration-500", children: [_jsx(motion.div, { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r", initial: { opacity: 0.7 }, animate: { opacity: 1 }, transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }, style: { backgroundImage: `linear-gradient(to right, ${currentStage.color.split("from-")[1].split(" to-")[0]}, ${currentStage.color.split("to-")[1]})` } }), _jsx(CardContent, { className: "p-8 relative", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "grid md:grid-cols-5 gap-8 items-center", children: [_jsx("div", { className: "md:col-span-1 flex justify-center", children: _jsx("div", { className: `w-20 h-20 rounded-full bg-gradient-to-br ${currentStage.color} flex items-center justify-center shadow-lg`, children: _jsx(IconComponent, { className: "h-10 w-10 text-white" }) }) }), _jsxs("div", { className: "md:col-span-4 text-center md:text-left", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between mb-4", children: [_jsx("h3", { className: "text-2xl font-heading font-bold mb-2 md:mb-0", children: currentStage.title }), _jsx(Badge, { className: "bg-primary/10 text-primary-dark self-center md:self-start px-3 py-1", children: currentStage.duration })] }), _jsx("p", { className: "text-neutral-darker mb-6", children: currentStage.description }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm text-neutral-dark font-medium", children: "How far are you in this stage?" }), _jsxs("span", { className: "text-sm font-bold", children: [userProgress, "%"] })] }), _jsx(Slider, { defaultValue: [0], max: 100, step: 5, value: [userProgress], onValueChange: handleSliderChange, className: "mb-6" }), _jsx("div", { className: "text-sm text-neutral-darker italic", children: userProgress === 0 ? ("Move the slider to track your progress in this stage") : userProgress < 50 ? ("You're making progress! Keep using the tools consistently.") : userProgress < 90 ? ("Great progress! You're well on your way through this stage.") : ("Amazing! You're nearly ready for the next stage of your journey.") })] })] })] }, currentStage.id) })] }), _jsxs("div", { className: "flex justify-between mt-8", children: [_jsxs(Button, { variant: "outline", onClick: prevStage, disabled: selectedStage === 0, className: "flex items-center", children: [_jsx(ChevronLeft, { className: "mr-2 h-4 w-4" }), " Previous Stage"] }), _jsxs(Button, { variant: "outline", onClick: nextStage, disabled: selectedStage === journeyStages.length - 1, className: "flex items-center", children: ["Next Stage ", _jsx(ChevronRight, { className: "ml-2 h-4 w-4" })] })] })] }), _jsxs("div", { className: "mt-10 p-6 rounded-xl bg-primary/5 border border-primary/10 text-center max-w-3xl mx-auto", children: [_jsx("p", { className: "font-medium mb-4", children: "Our 15-minute system guides you through each stage with specialized tools and techniques." }), _jsx(Button, { asChild: true, className: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300", children: _jsx("a", { href: "/npd/checkout", children: "Begin Your Healing Journey Today" }) })] })] }) }));
}
