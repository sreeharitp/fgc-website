import React from "react";
import solutionimg2 from "public/solution-img2.png";
import Image from "next/image";
import Button from "../buttons/Button";

const Experience = ({ data }) => {
  return (
    <div className="padding-x padding-y">
      {data.map((items) => (
        <div
          className=" flex flex-col sm:flex-row items-start justify-between gap-20"
          key={items.title}
        >
          <div className="w-full sm:w-3/5 pr-10">
            <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-8">
              {items.title}
            </h2>
            <p className="mb-8 3xl:text-[20px] opacity-80">{items.text}</p>
            <Button text="Get In Touch" url="" />
          </div>
          <div className="sm:w-2/5 rounded-xl">
            <Image
              src={solutionimg2}
              alt="service"
              className=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
