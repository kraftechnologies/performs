import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Collaboration team",
    description:
      "A cross-functional collaboration team brings together individuals from various departments.",
    image: "/feature-1.jpg",
    color: "text-[#8E24AA]",
    link: "/collaboration",
  },
  {
    title: "Cloud Storage",
    description:
      "Cloud storage is a model of data storage in which data is stored on remote servers access via the internet.",
    image: "/feature-2.jpg",
    color: "text-[#8E24AA]",
    link: "/cloud",
  },
  {
    title: "Employee Management",
    description:
      "Employee Management refers to the comprehensive process of overseeing and coordination.",
    image: "/feature-3.jpg",
    color: "text-[#8E24AA]",
    link: "/employee-management",
  },
];

export const OurFeaturesYouCabByAnima = (): JSX.Element => {
  return (
    <section>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Features you get
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Clickable Image with hover effect */}
              <Link to={feature.link} className="w-full group">
                <motion.div
                  className="w-full h-[240px] rounded-2xl overflow-hidden mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover cursor-pointer transition duration-300 ease-in-out group-hover:brightness-110"
                  />
                </motion.div>
              </Link>

              {/* Title & Description */}
              <h3 className={`text-2xl font-semibold mb-4 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
