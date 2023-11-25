"use client";

import React, { useRef } from "react";
import "../Timeline.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Button from "../../buttons/Button";

const TimelineWeb2 = ({ timeline }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className="text-center   relative overflow-hidden " ref={ref}>
      {timeline.map((items) => (
        <div
          key={items.id}
          className={`flex items-center justify-center  gap-12 sm:gap-8 lg:gap-20`}
        >
          <div className="w-[320px] 3xl:w-[430px]">
            <Image
              src={items.img}
              height={280}
              width={300}
              className="m-auto w-full"
            />
          </div>
          <div className="h-[400px] xl:h-[450px] w-[3px] bg-[#ddd] relative flex items-center  justify-center">
            <motion.span
              style={{
                scaleY: scrollYProgress,
              }}
              className="item"
            ></motion.span>
            {items.id == 1 ? (
              <span className="h-[20px] w-[20px] 3xl:h-[30px] 3xl:w-[30px] border-[3px] bg-[#E4361A] border-[#E4361A] absolute top-0 z-20 rounded-full flex items-center justify-center">
              <span className="h-[5px] w-[5px] 3xl:h-[8px] 3xl:w-[8px] rounded-full bg-[#fff]"></span>
            </span>
            ) : null}
            <span className="h-[20px] w-[20px] 3xl:h-[24px] 3xl:w-[24px] border-[3px] bg-white border-[#E4361A] absolute z-20 rounded-full flex items-center justify-center">
              <span className="h-[5px] w-[5px] 3xl:h-[6px] 3xl:w-[6px] rounded-full bg-[#E4361A]"></span>
            </span>
          </div>

          <div className="w-[320px] 3xl:w-[430px] text-right relative z-20">
          <h6 className="text-[18px] 3xl:text-[24px] font-medium mb-4 mt-5">
              {items.title}
            </h6>
            <p className="mb-6">{items.desc}</p>
            <Button text="عرض الشهادة" url="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineWeb2;
