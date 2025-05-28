import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
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
      } else {
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
  
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center min-w-14">
        <Card className="font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden">
          <div className="relative z-10">{formatNumber(timeLeft.days)}</div>
        </Card>
        <span className="text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium">Days</span>
      </div>
      
      <div className="flex flex-col items-center min-w-14">
        <Card className="font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden">
          <div className="relative z-10">{formatNumber(timeLeft.hours)}</div>
        </Card>
        <span className="text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium">Hours</span>
      </div>
      
      <div className="flex flex-col items-center min-w-14">
        <Card className="font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden">
          <div className="relative z-10">{formatNumber(timeLeft.minutes)}</div>
        </Card>
        <span className="text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium">Mins</span>
      </div>
      
      <div className="flex flex-col items-center min-w-14">
        <Card className="font-bold text-2xl bg-white text-red-500 py-3 px-1 min-w-16 text-center border border-gray-200 shadow-lg relative overflow-hidden animate-pulse-subtle">
          <div className="relative z-10">{formatNumber(timeLeft.seconds)}</div>
        </Card>
        <span className="text-xs mt-2 text-neutral-darker uppercase tracking-wider font-medium">Secs</span>
      </div>
    </div>
  );
}
