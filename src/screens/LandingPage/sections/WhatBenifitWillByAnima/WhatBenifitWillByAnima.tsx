import { BarChart2Icon, MessageCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhatBenifitWillByAnima = (): JSX.Element => {
  // Benefits data for mapping
  const benefits = [
    "Managing Employees with Ease",
    "Focused on Project Handling",
    "Onboarding new Employees",
    "Saving Money For The Future",
    "Easy Chats & Video Conferences.",
  ];

  return (
    <section className="flex justify-between w-full py-16 max-w-[1249px] mx-auto">
      {/* Left side - Benefits */}
      <div className="flex flex-col max-w-[473px]">
        <h2 className="text-[50px] font-bold text-[#191a15] font-['Inter',Helvetica] mb-12">
          What Benifit Will You Get
        </h2>

        <div className="space-y-[62px]">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-[20px]">
              <div className="relative w-8 h-8">
                <img
                  className="w-8 h-8"
                  alt="Checkmark"
                  src="/subtract-9.svg"
                />
              </div>
              <span className="font-['Inter',Helvetica] font-medium text-[#191a15] text-lg leading-[30px]">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Visual representation */}
      <div className="relative w-[643px] h-[543px]">
        <div className="relative h-full">
          {/* Accent icon */}
          <div className="absolute w-10 h-10 top-[279px] left-[59px] bg-app-accent rounded-[10px] rotate-[-15deg]">
            <img
              className="absolute w-6 h-6 top-2 left-2 rotate-[15deg]"
              alt="Image"
              src="/image-6.svg"
            />
          </div>

          {/* Main image */}
          <img
            className="absolute w-[450px] h-[529px] top-0 left-[124px]"
            alt="Dashboard preview"
            src="/rectangle-48.png"
          />

          {/* User card */}
          <Card className="absolute w-[304px] h-[82px] top-9 left-0 shadow-[0px_4px_9px_#0000000d] rounded-[10px]">
            <CardContent className="p-0">
              <div className="relative w-[264px] h-[58px] top-3 left-5 flex items-center">
                <img
                  className="w-[58px] h-[58px] rounded-full object-cover"
                  alt="User profile"
                  src="/ellipse-33.png"
                />
                <div className="ml-4">
                  <p className="font-['Inter',Helvetica] font-medium text-[#191a15] text-base">
                    Amanda Young
                  </p>
                  <p className="font-['Inter',Helvetica] font-medium text-[#a6a6a6] text-xs mt-1">
                    New Recruited
                  </p>
                </div>
                <div className="absolute right-0 w-10 h-10 bg-app-accent rounded-[20px] flex items-center justify-center">
                  <MessageCircleIcon className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income card */}
          <Card className="absolute w-[138px] h-[70px] top-[121px] left-[505px] shadow-[0px_4px_9px_#0000000d] rounded-[10px]">
            <CardContent className="p-0">
              <div className="relative w-[118px] h-[43px] top-[13px] left-3">
                <p className="font-['Inter',Helvetica] font-normal text-[#a9a7b6] text-xs">
                  Total Income
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-['Inter',Helvetica] font-medium text-[#191a15] text-base">
                    $245.00
                  </p>
                  <BarChart2Icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification card */}
          <Card className="absolute w-[302px] h-[68px] top-[475px] left-[18px] shadow-[0px_4px_9px_#0000000d] rounded-[10px]">
            <CardContent className="p-0">
              <div className="flex items-center h-full px-[25px]">
                <div className="w-6 h-6 mr-[15px]">
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Success icon"
                    src="/union-3.svg"
                  />
                </div>
                <p className="font-['Inter',Helvetica] font-normal text-[#191a15] text-lg tracking-[-0.54px]">
                  Salary Transfer Successful
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
