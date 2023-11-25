import React from "react";
import solution from "/public/solution-img.png";
import Image from "next/image";
import check from "/public/check-fill.svg";

const SolutionContent = () => {
  const content = [
    {
      id: 1,
      title: "Managed IT Support",
      desc: "Rits is proud to offer award-winning software solutions.",
    },
    {
      id: 2,
      title: "Cyber Security",
      desc: "Rits is proud to offer award-winning software solutions.",
    },
    {
      id: 3,
      title: "MCC Integrity",
      desc: "Rits is proud to offer award-winning software solutions.",
    },
    {
      id: 4,
      title: "IT services for you",
      desc: "Rits is proud to offer award-winning software solutions.",
    },
  ];

  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between gap-20">
      <div className="w-full sm:w-3/5 ">
        <h5 className="font-semibold text-[22px] 3xl:text-[30px] mb-5">
          Benefites of managed IT services
          <br className="hidden sm:block" /> provided by FGC
        </h5>
        <p className=" mb-10  3xl:text-[20px] opacity-80">
          FGC will act as a strategic IT partner and expert team, providing a
          bespoke service that is tailored to health Care needs. FGC will act as
          a strategic IT partner and expert team, providing a bespoke service
          that is tailored to health Care needs.
        </p>
        <ul className="list-disc  ml-5 3xl:text-[20px] opacity-80">
          <li> FGC will act as a strategic IT partner and expert team, </li>
          <li>providing a bespoke service that is tailored to health </li>
          <li>Care needs. FGC will act as a strategic </li>
          <li>
            IT partner and expert team, providing a bespoke service that is
            tailored to health Care needs.
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {content.map((items) => (
            <div className="flex gap-1 items-start" key={items.id}>
              <Image
                src={check}
                height={22}
                width={22}
                alt="check"
                className="mt-1"
              />
              <div>
                <h6 className="text-[20px] font-medium mb-3 3xl:text-[24px]">{items.title}</h6>
                <p className="3xl:text-[20px] opacity-80">{items.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-2/5">
        <Image src={solution} alt="service" />
      </div>
    </div>
  );
};

export default SolutionContent;
