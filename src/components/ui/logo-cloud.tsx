import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { name: "Unsplash", src: "/union-2.svg" },
  { name: "Notion", src: "/rectangle-73.svg" },
  { name: "INTERCOM", src: "/union.svg" },
  { name: "descript", src: "/union-3.svg" },
  { name: "grammarly", src: "/group-320.png" },
];

export const LogoCloud = () => {
  return (
    <div className="w-full py-12 bg-white/50 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView="auto"
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="max-w-7xl mx-auto"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
              <span className="text-gray-500 font-semibold">{logo.name}</span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};