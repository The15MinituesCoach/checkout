import { Facebook, Instagram, Twitter } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="bg-neutral-darkest text-neutral-lighter py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-base font-heading font-medium">
              Questions? <span className="text-black hover:underline ml-2">Support@The15minutesCoach.com</span>
            </div>
          </div>
          
          <div className="flex space-x-5">
            <a href="#" className="text-neutral-lighter hover:text-secondary transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-lighter hover:text-secondary transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-lighter hover:text-secondary transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-dark/30 text-center text-sm text-neutral-light/70">
          <p>© 2025 The15minutesCoach.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
