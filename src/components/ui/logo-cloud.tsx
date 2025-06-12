import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { name: "Unsplash", src: "/icons8-unsplash.svg" },
  { name: "Notion", src: "/icons8-notion.svg" },
  { name: "INTERCOM", src: "/icons8-intercom-96.png" },
  { name: "descript", src: "/Descript-Icon--Streamline-Svg-Logos.svg" },
  { name: "grammarly", src: "/icons8-grammarly.svg" },
];

export const LogoCloud = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden py-6">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView="auto"
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="max-w-7xl mx-auto"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 px-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain invert transition-all"
              />
              <span className="text-white text-lg font-semibold">
                {logo.name}
              </span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
