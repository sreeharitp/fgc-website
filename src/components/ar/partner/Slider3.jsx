"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import partner1 from "public/partner1.png";
import partner2 from "public/partner2.png";
import partner3 from "public/partner3.png";
import partner4 from "public/partner4.png";
import partner5 from "public/partner5.png";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const partners = [partner1, partner2, partner3, partner4, partner5, partner2];

export default function Slider3() {
  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="grid grid-cols-2 gap-6">
            {partners.map((items) => (
              <Image src={items} alt="partners" className="w-2/3 3xl:w-auto m-5" />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="grid grid-cols-2 gap-6">
            {partners.map((items) => (
              <Image src={items} alt="partners" className="w-2/3 3xl:w-auto m-5" />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
