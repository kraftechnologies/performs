import React from "react";
import { ChoosePlanThatsByAnima } from "./sections/ChoosePlanThatsByAnima";
import { CompanyByAnima } from "./sections/CompanyByAnima/CompanyByAnima";
import { RecurringFooter } from "./sections/FooterByAnima/RecurringFooter";
import { ConsultationSection } from "./sections/FooterByAnima/ConsultationSection";
import { HowWeSupportOurByAnima } from "./sections/HowWeSupportOurByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { OurFeaturesYouCabByAnima } from "./sections/OurFeaturesYouCabByAnima";
import { WeReHereToByAnima } from "./sections/WeReHereToByAnima";
import { WhatBenifitWillByAnima } from "./sections/WhatBenifitWillByAnima/WhatBenifitWillByAnima";
import { LogoCloud } from "../../components/ui/logo-cloud";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full overflow-x-hidden relative">
      {/* Background blurs stretched full width */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[634px] h-[634px] top-[2176px] left-[-194px] bg-[#ffd5d5] rounded-full blur-[500px]" />
        <div className="absolute w-[634px] h-[634px] top-[-364px] left-[581px] bg-[#ffd5d5] rounded-full blur-[500px]" />
        <div className="absolute w-[634px] h-[634px] top-[219px] left-[376px] bg-white rounded-full blur-[500px]" />
        <div className="absolute w-[634px] h-[634px] top-[270px] left-[1123px] bg-app-accent rounded-full blur-[500px]" />
        <div className="absolute w-[634px] h-[634px] top-[-280px] left-[-317px] bg-app-primary rounded-full blur-[500px]" />
        <div className="absolute w-[634px] h-[634px] top-[3278px] left-[1123px] bg-app-accent rounded-full blur-[500px]" />
      </div>

      {/* Content sections on top of background */}
      <div className="relative w-full z-10">
        <NavbarByAnima />

        {/* Full width image background section */}
        <div className="w-full">
          <WeReHereToByAnima />
        </div>

        {/* Full width LogoCloud */}
        <div className="w-full">
          <div className=" mx-auto">
            <LogoCloud />
          </div>
        </div>

        {/* Dark section */}
        <div className="w-full bg-[#0A0A1F] text-white relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#12121A]/40 via-[#1A1A2A]/60 to-[#12121A]/40 backdrop-blur-xl z-0" />

          {/* Content in dark section */}
          <div className="relative z-10 w-full flex justify-center">
            <div className="w-full max-w-[1440px] px-4">
              <WhatBenifitWillByAnima />
              <OurFeaturesYouCabByAnima />
              <HowWeSupportOurByAnima />
              <ChoosePlanThatsByAnima />
              {/* <CompanyByAnima /> */}
              <ConsultationSection />
              <RecurringFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
