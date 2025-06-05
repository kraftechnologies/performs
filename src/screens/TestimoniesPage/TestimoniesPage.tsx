import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/ellipse-54.png",
    content: "The platform has revolutionized how we manage our team projects. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    image: "/ellipse-55.png",
    content: "An incredible tool that has boosted our productivity by 40%. The interface is intuitive and user-friendly."
  },
  {
    name: "Emily Davis",
    role: "Team Lead",
    company: "InnovateNow",
    image: "/ellipse-56.png",
    content: "The best team management solution we've used. It's transformed our workflow completely."
  }
];

export const TestimoniesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#191a15] mb-6">
            What Our Clients Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our platform has helped businesses transform their workflow
            and achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg text-[#191a15]">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};