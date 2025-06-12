import { ArrowRightIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  AwardIcon,
  UsersIcon,
  Building2Icon,
  RocketIcon,
  HeartIcon,
} from "lucide-react";
import { countries } from "./countries";

export const FooterByAnima = (): JSX.Element => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "+91",
    phone: "",
    message: "",
    date: "",
    time: "",
  });


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_t3o3jsv",
        "template_ov0kvfd",
        form.current,
        "fn8pMeEWhX2PnqQ0F"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const footerLinks = [
    {
      title: "Support",
      links: ["Help centre", "Account information", "About", "Contact us"],
    },
    {
      title: "Help and Solution",
      links: ["Talk to support", "Support docs", "System status", "Covid responde"],
    },
    {
      title: "Product",
      links: ["Update", "Security", "Beta test", "Pricing product"],
    },
  ];

  const features = [
    {
      icon: <AwardIcon className="text-purple-500 w-6 h-6" />,
      title: "3+ years of Excellence",
      description: "Providing cutting-edge solutions for businesses of all sizes",
    },
    {
      icon: <UsersIcon className="text-purple-500 w-6 h-6" />,
      title: "250+ Satisfied Clients",
      description: "Serving startups & enterprises with innovation and precision",
    },
    {
      icon: <Building2Icon className="text-purple-500 w-6 h-6" />,
      title: "80+ Expert Professionals",
      description: "A highly skilled team committed to driving success",
    },
    {
      icon: <RocketIcon className="text-purple-500 w-6 h-6" />,
      title: "Innovative and Scalable Solutions",
      description: "Empowering business with technology-driven growth",
    },
    {
      icon: <HeartIcon className="text-purple-500 w-6 h-6" />,
      title: "Client-Centric Approach",
      description: "Delivering customized solutions tailored to your unique needs",
    },
  ];

  return (
    <footer id="footer" className="relative w-full text-white py-6 px-4 sm:px-8 lg:px-32 overflow-hidden ">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Book a Free Consultation
        </motion.h2>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white">Trusted by Industry Leaders</h3>
            <div className="space-y-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="p-2 bg-white/10 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-white/70 max-w-md">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button className="bg-purple-600 hover:bg-purple-700">Book a call</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Email Us</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Whatsapp</Button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#0A223E] p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
            <p className="text-sm text-white/70 mb-6">Get a response within 1 business hour.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Full Name" name="fullName" onChange={handleChange} value={formData.fullName} required className="text-white" />
              <Input placeholder="Email Address" name="email" type="email" onChange={handleChange} value={formData.email} required className="text-white" />
              <select name="country" onChange={handleChange} value={formData.country} className="bg-[#0A223E] border border-[#3B3B44] rounded-md text-white px-4 py-2">
                {countries.map((c, idx) => (
                  <option key={idx} value={c.code}>{c.name} ({c.code})</option>
                ))}
              </select>
              <Input placeholder="Phone Number" name="phone" onChange={handleChange} value={formData.phone} required className="text-white" />
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                required
                className="text-white"
              />
              <Input
                type="time"
                name="time"
                onChange={handleChange}
                value={formData.time}
                required
                className="text-white"
              />
            </div>

            <Textarea placeholder="Project Brief" name="message" onChange={handleChange} value={formData.message} required className="text-white mb-4" />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Enquire Now</Button>
          </motion.form>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <img className="w-12 h-12 mr-2" alt="Rr" src="/rr-1-2.png" />
              <h3 className="text-2xl font-bold flex items-center">
                <span className="text-white">recu</span>
                <span className="text-red-500">rr</span>
                <span className="text-white">ing</span>
              </h3>
            </div>
            <p className="text-white/70 text-sm">Get started now try our product</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pr-10 bg-[#1F1F25] border border-[#3B3B44] rounded-md text-white placeholder:text-gray-400 outline-none py-2 pl-4"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button className="bg-[#8E24AA] hover:bg-purple-700 rounded-md" size="icon">
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-base font-semibold text-white uppercase tracking-wide">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Based on Image */}
        <div className="mt-20 border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between items-start gap-12 text-white text-sm">
          <div className="space-y-4 max-w-lg">
            <img src="/kraf.png" alt="Kraf Technologies" className="h-12" />
            <p>
              At Kraf Technologies, we deliver cutting-edge SaaS solutions for B2B enterprises. Our mission is to
              empower businesses with tools that solve today's challenges and unlock tomorrow’s opportunities.
            </p>
          </div>

          <div className="space-y-2">
            <p><strong>E-mail:</strong> <a href="mailto:info@kraftechnologies.com" className="text-white">info@kraftechnologies.com</a></p>
            <p><strong>Team E-mail:</strong> <a href="mailto:team@kraftechnologies.com" className="text-white">team@kraftechnologies.com</a></p>
            <p><strong>Contact:</strong> <a href="tel:+919670269295" className="text-white">+91 9670269295</a></p>
            <p>
              <strong>HQ Office Address:</strong><br />
              400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex,<br />
              New Delhi 110016, Near Green Park Metro Station Exit-2.
            </p>
          </div>
        </div>

        {/* InGrey Footer Bottom Section */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-4 text-white text-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <img src="/ingrey-logo.png" alt="InGrey" className="h-6 mb-2 lg:mb-0" />
            <div className="flex flex-col">
              <p>All copyrights are the property of their respective owners</p>
              <p>Kraf Technologies, All rights reserved © 2025 InGrey Pvt. Ltd.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-linkedin text-xl text-white"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl text-white"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl text-white"></i></a>
            <a href="#"><i className="fab fa-facebook text-xl text-white"></i></a>
          </div>
        </div>
      </div>

    </footer >
  );
};
