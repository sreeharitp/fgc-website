"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider2.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import client1 from "public/client1.svg";
import client2 from "public/client2.svg";
import client3 from "public/client3.svg";
import Image from "next/image";

const clients = [
  {
    id: 1,
    title: "It’s just incredible!",
    desc: "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    image: client1,
    name: "Jimmy Bartney",
    designation: "Product Manager at Picko Lab",
  },
  {
    id: 2,
    title: "Satisfied User Here!",
    desc: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    image: client2,
    name: "Natasha Romanoff",
    designation: "Black Widow",
  },
  {
    id: 3,
    title: "No doubt, Spend.In is the best!",
    desc: "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    image: client3,
    name: "Moritika Kazuki",
    designation: "Finance Manager at Mangan",
  },
  {
    id: 4,
    title: "Satisfied User Here!",
    desc: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    image: client2,
    name: "Natasha Romanoff",
    designation: "Black Widow",
  },
];

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Slider2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        {clients.map((items) => (
          <SwiperSlide key={items.id}>
            <div className="border border-[#D6D6D6] rounded-[12px] p-8">
              <h6 className="text-[18px] font-medium mb-4">{items.title}</h6>
              <p className="min-h-[160px] text-[15px] 3xl:text-[16px]">{items.desc}</p>
              <div className="flex items-center gap-4 border-t pt-5 ">
                <Image
                  src={items.image}
                  height={70}
                  width={70}
                  className="rounded-[10px]"
                  alt="client-img"
                />
                <div className="">
                  <h6 className="text-[18px] font-semibold">{items.name}</h6>
                  <p className="text-[14px]">{items.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-4 justify-center pt-10">
        <div className="prev cursor-pointer  h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#E8E8E8]">
          <BsArrowLeft size={20} />
        </div>
        <div className="next  cursor-pointer h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#E8E8E8] slide-active">
          <BsArrowRight size={20} />
        </div>
      </div>
    </>
  );
}
