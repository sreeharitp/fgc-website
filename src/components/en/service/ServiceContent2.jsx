import React from "react";
import check from "/public/check-fill.svg";
import Image from "next/image";

const ServiceContent2 = () => {
  const content = [
    {
      id: 1,
      title: "Managed IT Support",
      desc: " We have mature processes built in accordance with industry compliance, ADHICS and ISO. Services are delivered using a suite of best-in-class IT Service Management F-SECURE and support tools providing the best customer experience possible.",
    },
    {
      id: 2,
      title: "Managed IT Support",
      desc: " We have mature processes built in accordance with industry compliance, ADHICS and ISO. Services are delivered using a suite of best-in-class IT Service Management F-SECURE and support tools providing the best customer experience possible.",
    },
    {
      id: 3,
      title: "Managed IT Support",
      desc: " We have mature processes built in accordance with industry compliance, ADHICS and ISO. Services are delivered using a suite of best-in-class IT Service Management F-SECURE and support tools providing the best customer experience possible.",
    },
    {
      id: 4,
      title: "Managed IT Support",
      desc: " We have mature processes built in accordance with industry compliance, ADHICS and ISO. Services are delivered using a suite of best-in-class IT Service Management F-SECURE and support tools providing the best customer experience possible.",
    },
  ];

  return (
    <div className="padding-x padding-bottom">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-10">
        {content.map((items) => (
          <div className="flex gap-1 items-start" key={items.id}>
            <Image
              src={check}
              height={22}
              width={22}
              alt="check"
              className="mt-1"
            />
            <div>
              <h6 className="text-[20px] 3xl:text-[24px] font-medium mb-3">{items.title}</h6>
              <p className="opacity-80">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceContent2;
