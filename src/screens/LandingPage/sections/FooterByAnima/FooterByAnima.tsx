import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Separator } from "../../../../components/ui/separator";
import { motion } from "framer-motion";

export const FooterByAnima = (): JSX.Element => {
  const testimonialImages = [
    { src: "/ellipse-54.png", alt: "Ellipse" },
    { src: "/ellipse-55.png", alt: "Ellipse" },
    { src: "/ellipse-56.png", alt: "Ellipse", objectCover: true },
    { src: "/ellipse-33.png", alt: "Ellipse", objectCover: true },
  ];

  const footerLinks = [
    {
      title: "Support",
      links: ["Help centre", "Account information", "About", "Contact us"],
    },
    {
      title: "Help and Solution",
      links: [
        "Talk to support",
        "Support docs",
        "System status",
        "Covid responde",
      ],
    },
    {
      title: "Product",
      links: ["Update", "Security", "Beta test", "Pricing product"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-dark-primary to-dark-accent py-32 px-8 md:px-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="font-semibold text-[50px] leading-tight text-white">
              People are Saying About <span className="text-app-primary">recurring</span>
            </h2>

            <p className="font-medium text-lg text-gray-300 leading-relaxed">
              Everything you need to manage and grow your company anywhere on planet
            </p>

            <div className="mt-8 space-y-6">
              <motion.img
                variants={itemVariants}
                className="w-[45px] h-[38px]"
                alt="Quote"
                src="/group-212.png"
              />

              <blockquote className="font-medium text-lg text-gray-300 leading-relaxed italic">
                "I am very helped by this recurring application, my days are very easy to use this application
                and its very helpful in my life, even I can pay a short time 😍"
              </blockquote>

              <p className="font-medium text-lg text-gray-300">
                _ Aria Zinanrio
              </p>
            </div>

            <div className="flex space-x-4">
              {testimonialImages.map((image, index) => (
                <motion.img
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full ${
                    image.objectCover ? "object-cover" : ""
                  }`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-lg rounded-2xl border-none">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <img
                    className="w-16 h-16 mx-auto mb-4"
                    alt="Rr"
                    src="/rr-1-2.png"
                  />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Get Started
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Textarea
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="What are you say?"
                    />
                  </div>

                  <Button className="w-full bg-app-primary hover:bg-app-primary/90">
                    Request Demo
                  </Button>

                  <div className="text-center">
                    <span className="text-gray-400">or</span>
                    <button className="ml-2 text-white hover:text-app-primary transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center">
              <img
                className="w-12 h-12 mr-2"
                alt="Rr"
                src="/rr-1-2.png"
              />
              <h3 className="text-3xl font-bold">
                <span className="text-white">recu</span>
                <span className="text-app-primary">rr</span>
                <span className="text-white">ing</span>
              </h3>
            </div>
            <p className="text-gray-300">
              Get started now try our product
            </p>
            <div className="relative">
              <Input
                className="pr-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Enter your email here"
              />
              <Button
                className="absolute right-1 top-1 p-2 bg-app-primary hover:bg-app-primary/90 rounded-full"
                size="icon"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold text-white">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-300">
            © 2024 recurring PVT LT. Copyright and rights reserved
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms and Conditions
            </a>
            <Separator orientation="vertical" className="h-4 bg-gray-600" />
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};