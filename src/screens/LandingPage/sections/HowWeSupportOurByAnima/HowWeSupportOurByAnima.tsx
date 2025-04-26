import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowWeSupportOurByAnima = (): JSX.Element => {
  const serviceCards = [
    {
      title: "Publishing",
      description:
        "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
      icon: "/activity-1.svg",
      alt: "Activity",
    },
    {
      title: "Analytics",
      description: "Analyze your performance and create goegeous report",
      icon: "/pie-chart-1.svg",
      alt: "Pie chart",
    },
    {
      title: "Engagement",
      description: "Quiuckly navigate you anda engage with your adience",
      icon: "/command-1.svg",
      alt: "Command",
    },
  ];

  const ratings = [
    {
      score: "4.9",
      category: "UI Design",
      stars: 5,
    },
    {
      score: "4.8",
      category: "UX - User Experience",
      stars: 5,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f9f8fe]">
      <div className="container flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-1">
          <h2 className="text-[50px] font-semibold text-[#191a15] leading-tight mb-8">
            How we support our pratner all over the world
          </h2>

          <p className="text-base font-medium text-[#a6a6a6] leading-[30px] mb-12">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>

          <div className="flex flex-wrap gap-x-20 gap-y-6">
            {ratings.map((rating, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex">
                  {[...Array(rating.stars)].map((_, i) => (
                    <img
                      key={i}
                      className="w-[25px] h-6 mr-[5px]"
                      alt="Star"
                      src="/star-7.svg"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-[#191a15]">
                    <span className="font-bold">{rating.score}</span> /{" "}
                    <span className="font-medium">5 rating</span>
                  </p>
                  <p className="font-bold text-lg text-[#a6a6a6]">
                    {rating.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-8">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex gap-5">
                  <div className="w-[60px] h-[60px] bg-white shadow-[0px_4px_9px_#0000000d] flex items-center justify-center">
                    <img
                      className="w-[30px] h-[30px]"
                      alt={card.alt}
                      src={card.icon}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[28px] text-[#191a15] mb-3">
                      {card.title}
                    </h3>
                    <p className="font-medium text-lg text-[#a6a6a6] leading-[30px] max-w-[428px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
