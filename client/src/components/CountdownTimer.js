import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Card } from "../components/ui/card";
export default function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
            else {
                // Timer expired
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        };
        // Initial calculation
        calculateTimeLeft();
        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);
        // Cleanup on unmount
        return () => clearInterval(timer);
    }, [targetDate]);
    const formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    };
    return (_jsxs("div", { className: "flex gap-3", children: [_jsxs("div", { className: "flex flex-col items-center min-w-14", children: [_jsx(Card, { className: "font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden", children: _jsx("div", { className: "relative z-10", children: formatNumber(timeLeft.days) }) }), _jsx("span", { className: "text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium", children: "Days" })] }), _jsxs("div", { className: "flex flex-col items-center min-w-14", children: [_jsx(Card, { className: "font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden", children: _jsx("div", { className: "relative z-10", children: formatNumber(timeLeft.hours) }) }), _jsx("span", { className: "text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium", children: "Hours" })] }), _jsxs("div", { className: "flex flex-col items-center min-w-14", children: [_jsx(Card, { className: "font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden", children: _jsx("div", { className: "relative z-10", children: formatNumber(timeLeft.minutes) }) }), _jsx("span", { className: "text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium", children: "Mins" })] }), _jsxs("div", { className: "flex flex-col items-center min-w-14", children: [_jsx(Card, { className: "font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden animate-pulse-subtle", children: _jsx("div", { className: "relative z-10", children: formatNumber(timeLeft.seconds) }) }), _jsx("span", { className: "text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium", children: "Secs" })] })] }));
}
