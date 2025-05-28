import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 shadow-lg border-t border-neutral-light md:hidden z-50">
      <Button asChild className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-3 px-6 font-medium transition-all duration-300 shadow-md text-center hover:shadow-lg hover:scale-[1.02] pulse-animation">
        <Link href="/checkout">
  <a
    className="bg-gradient-to-r from-accent to-secondary text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-md text-center mt-4 hover:shadow-lg hover:scale-[1.05]"
  >
   Get Access – $29
  </a>
</Link>

      </Button>
    </div>
  );
}
