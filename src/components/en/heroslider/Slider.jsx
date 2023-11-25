"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Navigation, Autoplay } from "swiper/modules";

import slide1 from "public/slider1.png";
import Image from "next/image";
import Button from "../buttons/Button";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={1000}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Parallax, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div slot="container-start" className="parallax-bg"></div>

        <SwiperSlide>
          <div className="w-full h-[60vh] md:h-[50vh] lg:h-[65vh] 3xl:h-[65vh] relative flex items-center justify-center">
            <Image
              src={slide1}
              alt="slider-img"
              className="h-[60vh] md:h-[50vh] lg:h-[65vh] 3xl:h-[65vh] object-cover w-full"
            />

            <div className=" absolute z-10 w-full padding-x flex flex-col gap-6 3xl:gap-10 box-width bottom-8 sm:bottom-auto">
              <h1
                className="  text-white font-semibold text-[35px] lg:text-[45px] leading-[45px] lg:leading-[55px] 3xl:text-[70px] 3xl:leading-[78px]"
                data-swiper-parallax="-800"
              >
                We manage your IT,
                <br /> so you can manage
                <br /> your business.
              </h1>
              <p
                className="text-white text-[20px] 3xl:text-[24px]"
                data-swiper-parallax="-1000"
              >
                Take charge of your business continuity with innovative IT
                solutions
              </p>
              <div data-swiper-parallax="-1200">
                <Button text="Get Consultation" url="" className="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[60vh] md:h-[50vh] lg:h-[65vh] 3xl:h-[65vh] relative flex items-center justify-center">
            <Image
              src={slide1}
              alt="slider-img"
              className="h-[60vh] md:h-[50vh] lg:h-[65vh] 3xl:h-[65vh] object-cover w-full"
            />

            <div className=" absolute z-10 w-full padding-x flex flex-col gap-6 3xl:gap-10 box-width bottom-8 sm:bottom-auto">
              <h1
                className="title  text-white font-semibold text-[35px] lg:text-[45px] leading-[45px] lg:leading-[55px] 3xl:text-[70px] 3xl:leading-[78px]"
                data-swiper-parallax="-800"
              >
                We manage your IT,
                <br /> so you can manage
                <br /> your business.
              </h1>
              <p
                className="text-white text-[20px] 3xl:text-[24px]"
                data-swiper-parallax="-1000"
              >
                Take charge of your business continuity with innovative IT
                solutions
              </p>
              <div data-swiper-parallax="-1200">
                <Button text="Get Consultation" url="" className="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="hidden lg:flex">
          <div className="swiper-button-prev flex items-center left-10 justify-center rounded-full border border-white">
            <IoIosArrowBack className="text-white" />
          </div>
          <div className="swiper-button-next  flex items-center  right-10 justify-center rounded-full border border-white">
            <IoIosArrowForward className="text-white" />
          </div>
        </div>
      </Swiper>
    </>
  );
}
