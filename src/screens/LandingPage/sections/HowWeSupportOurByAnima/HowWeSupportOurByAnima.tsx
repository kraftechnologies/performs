import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const HowWeSupportOurByAnima = (): JSX.Element => {
  const serviceCards = [
    {
      title: "Publishing",
      description:
        "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand.",
      icon: "/activity-1.svg",
      color: "text-[#8E24AA]",
    },
    {
      title: "Analytics",
      description:
        "Analyze your performance and create gorgeous report.",
      icon: "/pie-chart-1.svg",
      color: "text-[#8E24AA]",
    },
    {
      title: "Engagement",
      description:
        "Quickly navigate you and engage with your audience.",
      icon: "/command-1.svg",
      color: "text-[#8E24AA]",
    },
  ];

  return (
    <section>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 ">
        {/* Top Row */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start mb-14 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How we support our Partner
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl">
              Saas become a common delivery model for many business application, including office
              software, message software, payroll processing software, DBMS software,
              management software.
            </p>
          </div>

          {/* Rating Block */}
          <div className="flex items-start gap-3 mt-4 lg:mt-0">
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  return (
                    <img
                      key={i}
                      src="/icons8-stars.svg"
                      alt="Star"
                      className="w-6 h-6"
                    />
                  );
                })}
              </div>

              <p className="text-white text-base font-semibold mt-3">4.9 / 5 rating</p>
              <p className="text-sm text-white/50 mt-3">UI Design</p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="w-[50px] h-[50px] bg-white rounded-md flex items-center justify-center">
                    <img
                      className="w-6 h-6"
                      src={card.icon}
                      alt={card.title}
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${card.color}`}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
