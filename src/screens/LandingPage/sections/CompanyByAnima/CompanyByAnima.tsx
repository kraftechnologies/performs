import React from "react";

export const CompanyByAnima = (): JSX.Element => {
  // Company data for easier mapping
  const companies = [
    {
      id: 1,
      name: "Unsplash",
      logo: (
        <div className="relative w-[34px] h-8">
          <div className="absolute w-3 h-[9px] top-0 left-[11px] bg-[#a6a6a6]" />
          <div className="absolute w-[34px] h-[18px] top-3.5 left-0">
            <div className="relative h-[18px]">
              <div className="absolute w-[34px] h-[9px] top-[9px] left-0 bg-[#a6a6a6]" />
              <div className="absolute w-2.5 h-[18px] top-0 left-6 bg-[#a6a6a6]" />
              <div className="absolute w-2.5 h-[18px] top-0 left-0 bg-[#a6a6a6]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: "Notion",
      logo: (
        <div className="relative w-[38px] h-[35px]">
          <div className="absolute w-[30px] h-7 top-[7px] left-2">
            <div className="absolute top-0.5 left-[7px] font-semibold text-[#a6a6a6] text-xl">
              N
            </div>
            <div className="absolute w-[30px] h-7 top-0 left-0 border-2 border-solid border-[#a6a6a6]" />
          </div>
          <div className="absolute w-[38px] h-[35px] top-0 left-0">
            <img
              className="absolute w-[38px] h-[7px] top-0 left-0"
              alt="Rectangle"
              src="/rectangle-73.svg"
            />
            <img
              className="absolute w-2 h-[35px] top-0 left-0"
              alt="Rectangle"
              src="/rectangle-72.svg"
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "INTERCOM",
      logo: (
        <div className="relative w-[30px] h-[30px] bg-[#a6a6a6] rounded-[3px]">
          <div className="absolute w-0.5 h-3 top-[7px] left-1 bg-white" />
          <div className="absolute w-0.5 h-[18px] top-1 left-[9px] bg-white" />
          <div className="absolute w-0.5 h-[18px] top-1 left-3.5 bg-white" />
          <div className="absolute w-0.5 h-[18px] top-1 left-[19px] bg-white" />
          <img
            className="absolute w-[23px] h-[5px] top-[23px] left-1"
            alt="Vector"
            src="/vector-33.svg"
          />
          <div className="absolute w-0.5 h-3 top-[7px] left-6 bg-white" />
        </div>
      ),
    },
    {
      id: 4,
      name: "descript",
      logo: (
        <img className="w-[23px] h-[30px]" alt="Union" src="/union-2.svg" />
      ),
    },
    {
      id: 5,
      name: "grammarly",
      logo: (
        <div className="relative w-[30px] h-[30px] bg-[#a6a6a6] rounded-[15px]">
          <img
            className="absolute w-[18px] h-4 top-[7px] left-1.5"
            alt="Group"
            src="/group-320.png"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-16 w-full">
      <div className="max-w-[1078px] mx-auto">
        <h2 className="text-center text-[40px] font-bold mb-16">
          <span className="text-[#191a15]">
            More than 25,000 teams use recu
          </span>
          <span className="text-[#4787fa]">rr</span>
          <span className="text-[#191a15]">ing</span>
        </h2>

        <div className="flex justify-between items-center w-full">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center">
              <div className="mr-2.5">{company.logo}</div>
              <span className="font-semibold text-3xl text-[#a6a6a6]">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
