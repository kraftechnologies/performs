import React from "react";
import { MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

export const WhatBenifitWillByAnima = (): JSX.Element => {
  const benefits = [
    "Managing Employees with ease",
    "Focused on Project Handling",
    "Onboarding new employees",
    "Saving Money for the future",
    "Easy chats and video conference.",
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 py-24 px-6">
        {/* Left Side - Benefits List */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight">
            What Benefits will you get
          </h2>

          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-base sm:text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src="/Group 17.svg"
                  alt="Check"
                  className="w-5 h-5 mt-1"
                />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Image + Overlays */}
        <motion.div
          className="flex-1 max-w-sm relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/Rectangle.jpg"
            alt="Team Working"
            className="w-full h-auto object-cover rounded-2xl"
          />

          {/* Salary Credited Badge - top center */}
          <motion.div
            className="absolute top-4 left-0.5/4 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/icons8-verified-badge-48.png"
              alt="check"
              className="w-10 h-10"
            />
            <span className="text-white/90">Salary Credited Successful</span>
          </motion.div>

          {/* Amanda Young Card - bottom center */}
          <motion.div
            className="absolute bottom-[-30px] left-2/4 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/ellipse-33.png"
              alt="Amanda Young"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold">Amanda Young</p>
              <p className="text-xs text-white/70">New Recruit</p>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <MessageCircleIcon className="text-white w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
