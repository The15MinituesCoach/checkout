import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { SunIcon, HeartHandshakeIcon } from 'lucide-react';

export default function OnboardingAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Check if the animation has been shown before
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenAnimation) {
      setIsVisible(false);
    }
  }, []);

  // Auto-advance through the steps
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1);
      }
    }, 3500);
    
    return () => clearTimeout(timer);
  }, [currentStep, isVisible]);

  // Close the animation and save to localStorage
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  // Skip to the last step
  const handleSkip = () => {
    setCurrentStep(2);
  };

  if (!isVisible) return null;

  const steps = [
    {
      icon: <SunIcon className="h-16 w-16 text-amber-400" />,
      title: "You are in a safe space",
      message: "Welcome to a supportive community created specifically for survivors like you."
    },
    {
      icon: <HeartHandshakeIcon className="h-16 w-16 text-rose-400" />,
      title: "Your healing journey begins here",
      message: "Every step you take is a step towards reclaiming your authentic self and inner peace."
    },
    {
      icon: <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-md animate-pulse"></div>
        <div className="relative text-3xl">🌱</div>
      </div>,
      title: "Growth awaits you",
      message: "The 15-minute breakthrough system is designed to help you heal at your own pace, one day at a time."
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-darker hover:text-neutral-darkest z-10"
            >
              ✕
            </button>
            
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    {steps[currentStep].icon}
                  </div>
                  <h2 className="text-2xl font-heading font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-neutral-darker mb-8">
                    {steps[currentStep].message}
                  </p>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          step === currentStep
                            ? "w-8 bg-gradient-to-r from-primary to-secondary"
                            : "w-2 bg-neutral-lighter"
                        }`}
                      ></div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="p-4 bg-neutral-lightest border-t border-neutral-lighter flex justify-between">
              {currentStep < 2 ? (
                <Button variant="ghost" onClick={handleSkip}>
                  Skip
                </Button>
              ) : (
                <div></div>
              )}
              <Button 
                onClick={handleClose}
                className="pill-button bg-gradient-to-r from-accent to-secondary text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
              >
                {currentStep < 2 ? "Continue" : "Begin Your Journey"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}