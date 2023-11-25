import React from "react";
import medal from "public/medal.svg";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: 1,
    img: medal,
    title: "Managed Services",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
  {
    id: 2,
    img: medal,
    title: "IT Support",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
  {
    id: 3,
    img: medal,
    title: "Communications",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
  {
    id: 4,
    img: medal,
    title: "Professional Services",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
  {
    id: 5,
    img: medal,
    title: "Cyber Security",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
  {
    id: 6,
    img: medal,
    title: "MCC Integrator (CCTV)",
    desc: "Our unrivalled IT support capabilities can help all sizes of business an in-house teams, no matter what your needs.",
    url: "",
  },
];

const Solution = () => {
  return (
    <div className="linear-gradient">
      <div className="padding-x padding-y box-width">
        <div className="text-center">
          <h6 className="text-[20px] text-[#D02102] font-medium mb-4">
            How we do
          </h6>
          <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-6">
            Solutions
          </h2>
          <p className="3xl:text-[20px] opacity-80">
            FGC will act as a strategic IT partner and expert team, providing a
            bespoke service
            <br /> that is tailored to health Care needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-28">
          {solutions.map((items) => (
            <div
              key={items.id}
              className="flex flex-col bg-white rounded-[12px]"
            >
              <div className="p-5 flex flex-col gap-3">
                <Image src={items.img} alt="icon" />
                <h5 className="text-[24px] font-medium">{items.title}</h5>
                <p>{items.desc}</p>
              </div>
              <div className="p-4 border-t border-[#D6D6D6] leading-4">
                <Link
                  href={items.url}
                  className="text-[#D02102] text-[15px] font-medium underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
