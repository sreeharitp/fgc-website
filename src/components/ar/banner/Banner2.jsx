import React from "react";
import Image from "next/image";

const Banner2 = ({ data }) => {
  return (
    <div className="padding-x padding-y text-center">
      {data.map((items) => (
        <div key={items.title}>
          <p className="text-[#E4361A] text-[18px] 3xl:text-[20px] font-medium">
            {items.subtitle}
          </p>
          <h2 className="text-[30px] sm:text-[35px] w-full sm:w-1/2 m-auto lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mt-6 ">
            {items.title}
          </h2>
          <p className="mt-6 3xl:text-[20px] opacity-80">{items.text}</p>
          <Image
            src={items.img}
            className="rounded-[12px] my-14 h-[200px] m-auto sm:h-auto object-cover w-full"
            alt="banner"
          />
          <p className="3xl:text-[20px] opacity-80">{items.text2}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner2;
