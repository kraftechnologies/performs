import React from "react";
import { Button } from "../../../../components/ui/button";
import { Check, Star } from "lucide-react";

export const WeReHereToByAnima = (): JSX.Element => {
  const benefits = [
    { id: 1, text: "Streamlined HR Management" },
    { id: 2, text: "Real-time Analytics Dashboard" },
    { id: 3, text: "Seamless Team Integration" },
    { id: 4, text: "Customizable Workflows" },
  ];

  return (
    <section
      className="relative w-full py-12 sm:py-20 lg:py-32 bg-white font-jost flex items-center justify-center"
      aria-label="Enhance Your Work with PerformX"
    >
      <div className="container max-w-8xl px-0 flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="font-bold text-dark-primary text-5xl sm:text-6xl lg:text-8xl leading-tight animate-fade-in max-w-full mx-auto">
            We're here to Enhance your <br /> Work & Company
          </h1>

          <img
            className="w-full max-w-[200px] sm:max-w-xs mx-auto"
            alt="Decorative orange underline"
            src="/vector-32.svg"
          />

          <p className="font-medium text-base sm:text-lg lg:text-xl leading-relaxed text-dark-primary max-w-full mx-auto">
            Let's make your work more organized and easier using the 
            <span className="text-app-primary"> P</span>erformX Dashboard with many of
            the latest features in managing work every day.
          </p>
        </div>

        {/* Benefits List */}
        <div className="w-full max-w-6xl">
          <ul className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex items-center gap-2 text-dark-primary min-w-[120px] border border-app-primary rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
              >
                <Check
                  className="w-5 h-5 text-app-primary"
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base lg:text-lg font-medium">
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons and Rating */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-6">
          <Button
            className="px-4 sm:px-6 py-2 sm:py-3 bg-app-primary hover:bg-app-secondary rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all hover:scale-105 min-w-[120px]"
            aria-label="Start free trial"
          >
            Try free trial
          </Button>

          <div className="flex items-center gap-2 text-dark-primary min-w-[120px]">
            <span className="flex items-center gap-1 text-app-primary">
              <Star className="w-5 h-5 fill-app-primary" aria-hidden="true" />
              <span className="text-sm sm:text-base lg:text-lg font-medium">4.8</span>
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-medium">
              10,000+ PerformX Users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};