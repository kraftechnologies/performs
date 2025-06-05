import React from "react";
import { ChoosePlanThatsByAnima } from "./sections/ChoosePlanThatsByAnima";
import { CompanyByAnima } from "./sections/CompanyByAnima/CompanyByAnima";
import { FooterByAnima } from "./sections/FooterByAnima/FooterByAnima";
import { HowWeSupportOurByAnima } from "./sections/HowWeSupportOurByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { OurFeaturesYouCabByAnima } from "./sections/OurFeaturesYouCabByAnima";
import { WeReHereToByAnima } from "./sections/WeReHereToByAnima";
import { WhatBenifitWillByAnima } from "./sections/WhatBenifitWillByAnima/WhatBenifitWillByAnima";
import { LogoCloud } from "../../components/ui/logo-cloud";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full overflow-hidden relative">
      <div className="w-full max-w-[1440px] relative">
        {/* Background blurs */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-[634px] h-[634px] top-[2176px] left-[-194px] bg-[#ffd5d5] rounded-[317px] blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[-364px] left-[581px] bg-[#ffd5d5] rounded-[317px] blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[219px] left-[376px] bg-white rounded-[317px] blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[270px] left-[1123px] bg-app-accent rounded-[317px] blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[-280px] left-[-317px] bg-app-primary rounded-[317px] blur-[500px]" />
          <div className="absolute w-[634px] h-[634px] top-[3278px] left-[1123px] bg-app-accent rounded-[317px] blur-[500px]" />
        </div>

        {/* Content sections */}
        <NavbarByAnima />
        <WeReHereToByAnima />
        <LogoCloud />
        <div className="w-full bg-[#0A0A1F] text-white py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#12121A]/40 via-[#1A1A2A]/60 to-[#12121A]/40 backdrop-blur-xl z-0" />

          <WhatBenifitWillByAnima />
          <OurFeaturesYouCabByAnima />
          <HowWeSupportOurByAnima />
          <ChoosePlanThatsByAnima />
          {/*<CompanyByAnima />*/}
          <FooterByAnima />
        </div>

      </div>
    </div>
  );
};