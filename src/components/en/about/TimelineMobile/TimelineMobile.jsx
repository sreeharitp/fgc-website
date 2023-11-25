"use client";

import React, { useRef } from "react";
import "../Timeline.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const TimelineMobile = ({ timeline }) => {
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
          className={`flex items-center justify-center  gap-12 sm:gap-8 lg:gap-20  `}
        >
          <div className="h-[500px] w-[3px] bg-[#ddd] relative flex items-center  justify-center">
            <motion.span
              style={{
                scaleY: scrollYProgress,
              }}
              className="item"
            ></motion.span>
            {items.id == 1 ? (
              <span className="h-[20px] w-[20px] border-[3px] bg-[#E4361A] border-[#E4361A] absolute top-0 z-20 rounded-full flex items-center justify-center">
                <span className="h-[5px] w-[5px] rounded-full bg-[#fff]"></span>
              </span>
            ) : null}
            <span className="h-[20px] w-[20px] border-[3px] bg-white border-[#E4361A] absolute z-20 rounded-full flex items-center justify-center">
              <span className="h-[5px] w-[5px] rounded-full bg-[#E4361A]"></span>
            </span>
          </div>

          <div className="w-[250px] text-left relative z-20">
            <Image
              src={items.img}
              height={250}
              width={250}
              className="mr-auto mt-20" 
            />
            <h6 className="text-[18px] font-medium mb-4 mt-5">{items.title}</h6>
            <p>{items.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineMobile;
