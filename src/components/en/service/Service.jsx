import React from "react";
import service1 from "public/service1.png";
import service2 from "public/service2.png";
import service3 from "public/service3.png";
import Image from "next/image";

const services = [
  {
    id: 1,
    img: service1,
    title: "IT Support",
    desc: "Working to ADHICS and ISO aligned processes and industry best practices, we use leading-edge systems and tools to deliver world-class IT support to SMEs and internal IT teams.",
  },
  {
    id: 2,
    img: service2,
    title: "Project Delivery",
    desc: "Working to ADHICS and ISO aligned processes and industry best practices, we use leading-edge systems and tools to deliver world-class IT support to SMEs and internal IT teams",
  },
  {
    id: 3,
    img: service3,
    title: "Business Continuity",
    desc: "The best backup and disaster recovery option for businesses, it’s often thought of as an ‘insurance policy’ for your data. Business continuity services and solutions ensure you can recover data ",
  },
];

const Service = () => {
  return (
    <div className="padding-x padding-y">
      <h6 className="text-[20px] text-[#D02102] font-medium mb-4">Services</h6>
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[50px] font-semibold">
        Simplifying IT
        <br />
        for a complex world.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-5 lg:gap-12 mt-12">
        {services.map((items) => (
          <div key={items.id} className="flex flex-col gap-3">
            <Image src={items.img} alt="service-img" className="object-cover w-full"/>
            <h5 className="text-[20px] 3xl:text-[24px] font-medium ">{items.title}</h5>
            <p>{items.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
