import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const ChoosePlanThatsByAnima = (): JSX.Element => {
  // Plan data for mapping
  const plans = [
    {
      name: "Free",
      description: "Have a go  and test your  superpowers",
      price: "0",
      features: [
        "5 Employee",
        "2 Departments",
        "Public Share & Comments",
        "Chat Support",
        "5 Projects",
      ],
      ctaText: "Signup for free",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Experiment the power of infinite possibilities",
      price: "499",
      features: [
        "All the features of free plan",
        "20 Employees",
        "5 Departments",
        "10 Video Meetings/Month",
        "Salary Payroll",
      ],
      ctaText: "Go to pro",
      highlighted: true,
      badge: "Save $50 a year",
    },
    {
      name: "Business",
      description: "Unveil new superpowers and join the Design Leaque",
      price: "4999",
      features: [
        "All the features of pro plan",
        "Unlimited Employee",
        "Unlimited Departments",
        "Unlimited Meetings",
        "Dedicated Service",
      ],
      ctaText: "Goto Business",
      highlighted: false,
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 w-full">
      <div className="max-w-[1184px] mx-auto flex flex-col items-center">
        <h2 className="text-[50px] font-bold text-[#191a15] text-center leading-[73px] [font-family:'Inter',Helvetica]">
          Choose Plan
          <br />
          That&apos;s Right For You
        </h2>

        <p className="mt-8 text-lg font-bold text-[#a6a6a6] text-center [font-family:'Inter',Helvetica]">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="mt-6 mb-16">
          <ToggleGroup
            type="single"
            defaultValue="yearly"
            className="w-[340px] h-[70px] bg-white rounded-[10px] shadow-[0px_4px_9px_#0000000d] p-[7px]"
          >
            <ToggleGroupItem
              value="monthly"
              className="w-40 h-14 rounded-[10px] data-[state=off]:bg-transparent data-[state=off]:text-[#191a15] data-[state=on]:bg-app-primary data-[state=on]:text-white [font-family:'Inter',Helvetica] font-medium text-lg"
            >
              Bil Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="w-40 h-14 rounded-[10px] data-[state=off]:bg-transparent data-[state=off]:text-[#191a15] data-[state=on]:bg-app-primary data-[state=on]:text-white [font-family:'Inter',Helvetica] font-medium text-lg"
            >
              Bil Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${plan.highlighted ? "h-[684px]" : "h-[644px] mt-[22px]"}`}
            >
              <Card
                className={`w-full h-full rounded-[20px] shadow-[0px_4px_9px_#0000000d] overflow-hidden ${
                  plan.highlighted ? "bg-app-primary" : "bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="relative w-[600px] h-[706px] top-10 left-[-113px]">
                    <div className="absolute w-[600px] h-[600px] top-[106px] left-0 bg-app-secondary rounded-[300px]" />
                  </div>
                )}

                <CardContent
                  className={`relative z-10 flex flex-col items-center pt-10 ${plan.highlighted ? "text-white" : ""}`}
                >
                  <h3
                    className={`text-3xl font-semibold [font-family:'Inter',Helvetica] ${plan.highlighted ? "text-white" : "text-[#191a15]"}`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-4 text-lg font-medium text-center w-[210px] leading-[27px] [font-family:'Inter',Helvetica] ${plan.highlighted ? "text-white" : "text-[#a6a6a6]"}`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`mt-6 flex items-end ${plan.highlighted ? "text-white" : ""}`}
                  >
                    <span
                      className={`text-lg font-medium [font-family:'Inter',Helvetica] ${plan.highlighted ? "text-white" : "text-[#a6a6a6]"}`}
                    >
                      ₹
                    </span>
                    <span
                      className={`text-[50px] font-semibold leading-[30px] ml-1 [font-family:'Inter',Helvetica] ${plan.highlighted ? "text-white" : "text-[#191a15]"}`}
                    >
                      {plan.price}
                    </span>
                  </div>

                  {plan.badge && (
                    <Badge className="mt-8 bg-app-accent text-white font-semibold text-sm px-3 py-1 rounded-[10px] [font-family:'Inter',Helvetica]">
                      {plan.badge}
                    </Badge>
                  )}

                  <div className="mt-8 w-[334px] h-[380px] bg-gray-50 rounded-[10px]">
                    <div className="p-6 flex flex-col gap-[22px]">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <img
                            className="w-[26px] h-[26px]"
                            alt="Checkmark"
                            src="/subtract.svg"
                          />
                          <span className="ml-3 font-medium text-lg text-[#191a15] [font-family:'Inter',Helvetica]">
                            {feature}
                          </span>
                        </div>
                      ))}

                      <Button
                        className={`mt-7 w-[260px] h-16 rounded-[20px] font-semibold text-lg [font-family:'Inter',Helvetica] ${
                          plan.highlighted
                            ? "bg-app-primary text-white"
                            : "bg-white text-app-primary shadow-[0px_4px_9px_#0000000d]"
                        }`}
                      >
                        {plan.ctaText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
