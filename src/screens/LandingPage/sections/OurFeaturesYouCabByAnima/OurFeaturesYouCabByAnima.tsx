import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define feature data for mapping
const features = [
  {
    title: "Collboration Teams",
    description: "Here you can handle projects together with team virtually",
    illustration: (
      <div className="relative w-[342px] h-[390px] mx-auto mt-10">
        <div className="absolute w-[326px] h-[314px] top-[76px] left-4 bg-[#f5fafa]" />
        <div className="absolute w-80 h-[350px] top-0 left-0">
          <div className="absolute w-80 h-[230px] top-0 left-0">
            <div className="absolute w-[235px] h-[105px] top-0 left-[85px]">
              <div className="absolute w-[235px] h-[90px] top-[15px] left-0">
                <div className="absolute w-[235px] h-[15px] top-0 left-0 bg-[#dbe5fa]" />
                <div className="absolute w-[214px] h-[15px] top-[25px] left-0 bg-[#dbe5fa]" />
                <div className="absolute w-[190px] h-[15px] top-[50px] left-0 bg-[#dbe5fa]" />
                <div className="absolute w-[168px] h-[15px] top-[75px] left-0 bg-[#dbe5fa]" />
              </div>
              <div className="absolute w-[119px] h-[55px] top-0 left-[58px]">
                <div className="absolute w-[50px] h-[50px] top-[5px] left-0 bg-app-primary rounded-[25px] rotate-180" />
                <img
                  className="absolute w-[58px] h-[46px] -top-px left-[63px]"
                  alt="Vector"
                  src="/vector-37.svg"
                />
              </div>
            </div>
            <div className="absolute w-[235px] h-[90px] top-[135px] left-[85px]">
              <div className="absolute w-[235px] h-[15px] top-0 left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[214px] h-[15px] top-[25px] left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[190px] h-[15px] top-[50px] left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[168px] h-[15px] top-[75px] left-0 bg-[#dbe5fa]" />
            </div>
            <div className="absolute w-[63px] h-[90px] top-[15px] left-0 bg-app-primary rounded-sm" />
            <div className="absolute w-[63px] h-[90px] top-[140px] left-0 bg-app-primary rounded-sm" />
          </div>
          <div className="absolute w-80 h-[90px] top-[260px] left-0">
            <div className="absolute w-80 h-[90px] top-0 left-0">
              <div className="absolute w-[90px] h-[90px] top-0 left-0 bg-[#dbe5fa] rounded-[45px]" />
              <div className="absolute w-[90px] h-[90px] top-0 left-[115px] bg-app-primary rounded-[45px]" />
              <div className="absolute w-[90px] h-[90px] top-0 left-[230px] bg-app-primary rounded-[45px]" />
            </div>
            <div className="absolute w-12 h-[18px] top-9 left-[251px]">
              <div className="absolute w-2 h-2 top-[5px] left-10 bg-white rounded" />
              <div className="absolute w-3 h-3 top-[3px] left-[23px] bg-white rounded-md" />
              <div className="absolute w-[18px] h-[18px] top-0 left-0 bg-white rounded-[9px]" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud Storage",
    description:
      "No nedd to worry about storage because we provide storage up to 2 TB",
    illustration: (
      <div className="relative w-[353px] h-[416px] mx-auto mt-[33px]">
        <div className="absolute w-[353px] h-[351px] top-[65px] left-0 bg-[#e9effc] rounded-[10px]">
          <div className="relative w-[326px] h-[314px] top-[18px] left-[18px] bg-[#f5fafa]" />
        </div>
        <div className="absolute w-[315px] h-[369px] top-0 left-[38px]">
          <div className="absolute w-[284px] h-[205px] top-0 left-0">
            <div className="relative h-[205px]">
              <div className="absolute w-[267px] h-[174px] top-[31px] left-0 bg-app-primary rounded-[10px] overflow-hidden shadow-[0px_14px_44px_#00000026]">
                <div className="relative w-[270px] h-[174px] -left-1 bg-[url(/vector-39.svg)] bg-[100%_100%]">
                  <div className="relative w-[210px] h-[135px] top-5 left-6">
                    <div className="absolute w-[42px] h-[42px] top-0 left-0 bg-[#fee900] rounded-[10px]">
                      <div className="relative w-5 h-5 top-[11px] left-[11px] bg-app-primary rounded bg-[url(/bar-chart-2-1.svg)] bg-[100%_100%]" />
                    </div>
                    <div className="absolute top-[72px] left-0 font-medium text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Document File
                    </div>
                    <div className="top-[113px] left-0 text-white leading-[normal] absolute font-medium text-lg tracking-[0]">
                      456 GB I 1056 Items
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[66px] h-[66px] top-0 left-[218px] bg-white rounded-[10px] shadow-[0px_4px_9px_#0000000d]">
                <img
                  className="absolute w-[34px] h-[26px] top-5 left-4"
                  alt="Union"
                  src="/union.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-7 h-36 top-[82px] left-[287px] bg-app-primary rounded-[30px]" />
          <div className="absolute w-[266px] h-[134px] top-[235px] left-9">
            <div className="relative h-[134px] rounded-[9px]">
              <img
                className="absolute w-[210px] h-0.5 top-6 left-[45px]"
                alt="Vector"
                src="/vector-41.svg"
              />
              <img
                className="absolute w-[210px] h-0.5 top-[63px] left-[45px]"
                alt="Vector"
                src="/vector-41.svg"
              />
              <img
                className="absolute w-[210px] h-0.5 top-[102px] left-[45px]"
                alt="Vector"
                src="/vector-41.svg"
              />
              <div className="absolute w-[266px] h-[134px] top-0 left-0 rounded-[9px] border border-solid border-[#e7ecf3]" />
              <div className="absolute w-[18px] h-16 top-[53px] left-[52px] bg-app-primary rounded-[30px]" />
              <div className="absolute w-[18px] h-16 top-[21px] left-[97px] bg-app-primary rounded-[30px]" />
              <div className="absolute w-[18px] h-16 top-[35px] left-[142px] bg-app-primary rounded-[30px]" />
              <div className="absolute w-[18px] h-16 top-[53px] left-[187px] bg-app-primary rounded-[30px]" />
              <div className="absolute w-[18px] h-16 top-[26px] left-[232px] bg-app-primary rounded-[30px]" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Employee/Team Management",
    description:
      "Easily Manage all the teams and employees in different department easily",
    illustration: (
      <div className="relative w-[360px] h-[428px] mx-auto mt-[21px]">
        <div className="absolute w-[353px] h-[351px] top-[77px] left-0 bg-[#e9effc] rounded-[10px]">
          <div className="relative w-[326px] h-[314px] top-[18px] left-[18px] bg-[#f5fafa]" />
        </div>
        <div className="absolute w-[353px] h-[238px] top-[143px] left-[7px]">
          <div className="absolute w-[313px] h-[106px] top-0 left-10 rounded-[10px] border border-solid border-[#eff2f7]">
            <div className="relative w-[290px] h-[70px] top-[17px] left-[17px]">
              <div className="absolute w-[70px] h-[70px] top-0 left-0 bg-app-primary rounded-[10px] shadow-[0px_4px_9px_#0000000d]">
                <img
                  className="absolute w-[34px] h-[26px] top-[22px] left-[18px]"
                  alt="Union"
                  src="/union.svg"
                />
              </div>
              <div className="absolute w-[190px] h-16 top-[3px] left-[100px]">
                <div className="absolute w-[190px] h-2.5 top-[54px] left-0 bg-[#dbe5fa] rounded-[70px]">
                  <div className="w-[92px] h-2.5 bg-app-primary rounded-[70px]" />
                </div>
                <div className="absolute w-[104px] h-1.5 top-8 left-0 bg-[#dbe5fa] rounded-[70px]" />
                <div className="absolute w-[190px] h-4 top-0 left-0 bg-[#dbe5fa] rounded-[70px]" />
              </div>
            </div>
          </div>
          <div className="absolute w-[348px] h-[106px] top-[132px] left-0 bg-white rounded-[10px] border border-solid border-[#eff2f7]">
            <div className="relative w-[328px] h-[70px] top-[17px] left-[17px]">
              <div className="absolute w-[70px] h-[70px] top-0 left-0 bg-white rounded-[10px] shadow-[0px_4px_9px_#0000000d]" />
              <div className="absolute w-[228px] h-16 top-[3px] left-[100px]">
                <div className="absolute w-[228px] h-2.5 top-[54px] left-0 bg-[#dbe5fa] rounded-[70px]">
                  <div className="w-[163px] h-2.5 bg-app-primary rounded-[70px]" />
                </div>
                <div className="absolute w-[125px] h-1.5 top-8 left-0 bg-[#dbe5fa] rounded-[70px]" />
                <div className="absolute w-[228px] h-4 top-0 left-0 bg-[#dbe5fa] rounded-[70px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-10 h-10 top-[308px] left-10 bg-[url(/group.png)] bg-[100%_100%]" />
        <div className="absolute w-[190px] h-[190px] top-0 left-[65px]">
          <div className="w-[194px] h-[190px]">
            <div className="relative w-[190px] h-[190px]">
              <div className="absolute w-[190px] h-[190px] top-0 left-0">
                <div className="relative h-[95px] bg-[url(/ellipse-453.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[190px] h-[95px] top-0 left-0"
                    alt="Ellipse"
                    src="/ellipse-454.svg"
                  />
                  <img
                    className="absolute w-[75px] h-[89px] top-1.5 left-[115px]"
                    alt="Ellipse"
                    src="/ellipse-455.svg"
                  />
                  <img
                    className="absolute w-[72px] h-[88px] top-[7px] left-[118px]"
                    alt="Ellipse"
                    src="/ellipse-456.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[105px] left-1 font-medium text-black text-sm tracking-[0] leading-[normal]">
                60%
              </div>
              <div className="absolute top-[105px] left-40 font-medium text-black text-sm tracking-[0] leading-[normal]">
                40%
              </div>
              <div className="absolute w-[78px] h-[78px] top-14 left-14 bg-[#fefefd] rounded-[39px]">
                <div className="relative w-[60px] h-[60px] top-[9px] left-[9px] bg-[#e6f9fd] rounded-[30px]" />
              </div>
              <div className="absolute w-[22px] h-[30px] top-20 left-[84px] rotate-[-148.39deg]">
                <img
                  className="absolute w-8 h-[38px] -top-1 left-[-5px] rotate-[148.39deg]"
                  alt="Group"
                  src="/group-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const OurFeaturesYouCabByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <div className="max-w-md mb-8 md:mb-0">
          <h2 className="font-semibold text-[#191a15] text-4xl md:text-[50px] leading-tight mb-4">
            Our Features you can get
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <p className="text-[#a6a6a6] text-lg max-w-md font-medium leading-[30px]">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your project easily
          </p>
          <Button className="bg-app-primary text-white rounded-[70px] px-8 py-4 h-auto font-medium text-lg">
            Get Started
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <Card className="bg-[#f9f8fe] rounded-[20px] overflow-hidden h-[430px] border-none mb-8">
              <CardContent className="p-0">{feature.illustration}</CardContent>
            </Card>
            <h3 className="font-semibold text-[#191a15] text-3xl leading-[30px] mb-5">
              {feature.title}
            </h3>
            <p className="text-[#a6a6a6] text-lg font-medium leading-[30px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
