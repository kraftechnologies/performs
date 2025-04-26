import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/ellipse-33.png",
    bio: "Visionary leader with 15+ years of experience in tech."
  },
  {
    name: "Sarah Williams",
    role: "Head of Product",
    image: "/ellipse-54.png",
    bio: "Product strategist passionate about user experience."
  },
  {
    name: "David Chen",
    role: "CTO",
    image: "/ellipse-55.png",
    bio: "Tech expert specializing in scalable solutions."
  }
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#191a15] mb-6">
            About recurring
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're on a mission to transform how teams work together and achieve
            their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#191a15]">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, recurring was born from a simple idea: make team
              collaboration seamless and effective. What started as a small project
              has grown into a comprehensive platform used by thousands of teams
              worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform combines powerful project management tools with
              intuitive design, helping teams of all sizes achieve their goals
              more efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="/rectangle-48.png"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#191a15] mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind recurring who make it all possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#191a15] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-app-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};