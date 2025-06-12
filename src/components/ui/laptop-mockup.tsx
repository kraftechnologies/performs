import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface LaptopMockupProps {
  children: React.ReactNode;
  className?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto perspective",
        className
      )}
      role="figure"
      aria-label="Laptop mockup displaying PerformX dashboard"
    >
      <div className="relative transform-3d">
        {/* Laptop lid */}
        <div className="relative bg-gradient-to-br from-dark-primary to-dark-accent rounded-t-2xl p-4 sm:p-6 shadow-2xl">
          {/* Screen bezel */}
          <div className="absolute inset-3 sm:inset-4 bg-dark-primary rounded-lg overflow-hidden">
            {/* Screen content */}
            <div className="relative w-full h-full bg-white">
              {children}
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-app-accent/10 to-app-primary/20 pointer-events-none" />
            </div>
          </div>

          {/* Camera */}
          <div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-accent rounded-full"
            aria-hidden="true"
          >
            <div className="absolute inset-[2px] bg-gray-700 rounded-full" />
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative h-6 sm:h-8 bg-gradient-to-b from-dark-accent to-dark-primary rounded-b-lg transform-3d rotate-x-12">
          {/* Keyboard area */}
          <div
            className="absolute inset-x-4 top-1 h-4 bg-dark-primary/80 rounded-t-sm"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[url('/public/keyboard-texture.png')] opacity-20" />
          </div>
          {/* Touchpad */}
          <div
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-2 bg-dark-accent/50 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Shadow */}
        <div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-dark-primary/20 blur-xl rounded-ellipse"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};