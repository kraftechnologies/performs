import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Collaboration team",
    image: "/feature-1.jpg",
    color: "text-[#8E24AA]",
    fullContent: `At the heart of our success is our dedicated Collaboration Team — a dynamic group of professionals who believe in the power of unity, innovation, and shared vision. With diverse expertise across various domains, our team thrives on open communication, mutual respect, and a collaborative spirit that transforms ideas into impactful results.

We foster an environment where every voice is heard, creativity is encouraged, and challenges are tackled together. Whether working across departments or partnering with clients and stakeholders, our team is committed to building strong relationships and delivering excellence through synergy and teamwork.

Together, we don’t just work — we co-create, innovate, and grow.`,
  },
  {
    title: "Cloud Storage",
    image: "/feature-2.jpg",
    color: "text-[#8E24AA]",
    fullContent: `Our cloud storage solutions offer secure, scalable, and reliable access to your data—anytime, anywhere. Designed for flexibility and performance, our cloud infrastructure ensures seamless data management, automatic backups, and real-time synchronization across devices.

Whether you're a growing business or an individual user, our storage systems are built to protect your critical information with advanced encryption, user-level access controls, and 24/7 availability. Easily store, share, and collaborate on files without worrying about physical limitations or security threats.

Empower your workflow with cloud storage that grows with you.`,
  },
  {
    title: "Employee Management",
    image: "/feature-3.jpg",
    color: "text-[#8E24AA]",
    fullContent: `Our employee management system is designed to streamline workforce operations and foster a productive, motivated, and well-connected team. From onboarding and attendance tracking to performance evaluations and payroll integration, we provide a centralized platform to manage every aspect of the employee lifecycle.

With intuitive tools and real-time analytics, managers can make informed decisions while employees enjoy transparency, efficient communication, and seamless access to their work-related information.

We believe that empowering employees begins with effective management — and our solutions are built to support growth, engagement, and organizational success.`,
  },
];

export const OurFeaturesYouCabByAnima = (): JSX.Element => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Features you get
      </motion.h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setSelectedFeature(index)}
            className={`px-6 py-3 rounded-xl border transition-all duration-300 ${selectedFeature === index
              ? "bg-[#8E24AA]/90 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Image Preview */}
      <motion.div
        key={features[selectedFeature].image}
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[300px] rounded-2xl overflow-hidden mb-10"
      >
        <img
          src={features[selectedFeature].image}
          alt={features[selectedFeature].title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <h3 className={`text-3xl font-bold mb-4 ${features[selectedFeature].color}`}>
            {features[selectedFeature].title}
          </h3>
          <p className="text-white/80 whitespace-pre-line leading-relaxed text-lg">
            {features[selectedFeature].fullContent}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};