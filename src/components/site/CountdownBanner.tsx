import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function CountdownBanner() {
  // Target: July 1, 2026 00:00:00 UTC+1 (West Africa Standard Time / Nigeria)
  const targetDate = new Date("2026-07-01T00:00:00+01:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return null;
  }

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-black via-neutral-900 to-brand-blue text-white py-3 px-4 border-b border-neutral-800/60 backdrop-blur-md shadow-lg text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">

        {/* Timer Section */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {/* <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse" /> */}
          <span className="tracking-wide font-semibold text-gray-200">Cohort  Applications Close In:</span>
          <div className="flex gap-1 font-mono font-bold bg-neutral-950 border border-neutral-800 px-2 py-0.5 rounded text-brand-yellow min-w-[100px]">
            <span>{String(timeLeft.days).padStart(2, "0")}d</span>:
            <span>{String(timeLeft.hours).padStart(2, "0")}h</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
        </div>

        {/* CTA Link Section */}
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 text-brand-yellow font-bold group transition-all hover:text-white"
        >
          <span>Submit your application & lock your seat</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </a>

      </div>
    </div>
  );
}