import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#191a15] mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="w-6 h-6 mr-3">📍</span>
                  123 Business Avenue, Suite 100, New York, NY 10001
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-6 h-6 mr-3">📞</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-6 h-6 mr-3">✉️</span>
                  contact@recurring.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <Input placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                placeholder="How can we help you?"
                className="h-32"
              />
            </div>

            <Button className="w-full bg-app-primary hover:bg-app-primary/90">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};