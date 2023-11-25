import React from "react";
import image from "public/timeline.png";
import TimelineMobile2 from "./TimelineMobile2";

const MobileTimeline2 = () => {
  const data1 = [
    {
      id: 1,
      img: image,
      title: "Certified Information Systems Security Professional (CISSP)",
      desc: "This certification is proof of being able to design, implement, and manage a best-in-class cybersecurity program.In the USA, this certification is comparable to a Master’s level qualification. That’s how serious it is, and why we’re so proud that multiple members of our team have earned it.",
    },
  ];
  const data2 = [
    {
      id: 2,
      img: image,
      title: "AICPA SOC 2 Type 2",
      desc: "We’re one of the few MSPs to hold this certification. We’re proud to be part of an elite group that takes cybersecurity seriously and has the evidence to back up our commitment. SOC 2 is an examination of our strict information security policies and procedures encompassing the security, availability, processing, integrity, and confidentiality of customer data",
    },
  ];
  const data3 = [
    {
      id: 3,
      img: image,
      title: "AICPA SOC 2 Type 2",
      desc: "We’re one of the few MSPs to hold this certification. We’re proud to be part of an elite group that takes cybersecurity seriously and has the evidence to back up our commitment. SOC 2 is an examination of our strict information security policies and procedures encompassing the security, availability, processing, integrity, and confidentiality of customer data",
    },
  ];
  return (
    <div className="flex flex-col gap-0 padding-y padding-x">
      <TimelineMobile2 timeline={data1} />
      <TimelineMobile2 timeline={data2} />
      <TimelineMobile2 timeline={data3} />
    </div>
  );
};

export default MobileTimeline2;
