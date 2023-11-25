import Image from "next/image";
import React from "react";
import banner from "/public/service.png";
import Button from "../buttons/Button";

const Banner = ({ data }) => {
  return (
    <div className="w-full h-[400px]  sm:h-[330px] 3xl:h-[440px] relative flex items-center justify-center">
      <Image
        src={banner}
        alt="banner"
        className="object-cover w-full h-[400px]  sm:h-[330px] 3xl:h-[440px]"
      />
      {data.map((item) => (
        <div className="padding-x flex flex-col gap-5 3xl:gap-10 box-width justify-center absolute py-12 h-full w-full" key={item.title}>
          <span className="uppercase text-[15px] font-medium bg-white px-3 py-1 rounded-[6px] max-w-fit">
            {item.subtitle}
          </span>
          <h2 className="text-[32px] lg:text-[40px] leading-[45px] lg:leading-[55px] 3xl:text-[50px] font-semibold text-white">
            {item.title}
          </h2>
          <p className="text-[#ffffffde]  w-full 3xl:text-[20px] 3xl:leading-[30px]">{item.text}</p>
          <Button text="جدولة مكالمة" url="" />
        </div>
      ))}
    </div>
  );
};

export default Banner;
