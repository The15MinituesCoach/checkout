import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../components/ui/button";
export default function MobileStickyCTA() {
    return (_jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 shadow-lg border-t border-neutral-light md:hidden z-50", children: _jsx(Button, { asChild: true, className: "w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-6 font-medium transition-all duration-300 shadow-md text-center hover:shadow-lg hover:scale-[1.02] pulse-animation", children: _jsx("a", { href: "/npd/checkout", className: "text-sm sm:text-base flex items-center justify-center whitespace-nowrap", children: "Get Access \u2013 $29" }) }) }));
}
