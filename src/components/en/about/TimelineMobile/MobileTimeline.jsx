import React from "react";
import TimelineMobile from "./TimelineMobile";
import image from "public/timeline.png";


const MobileTimeline = () => {

  const data1 = [
    {
      id: 1,
      img: image,
      title: "The Begining",
      desc: "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    }

  ];
  const data2 = [

    {
      id: 11,
      img: image,
      title: "Mission",
      desc: "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    },

  ];
  const data3 = [
    {
      id: 111,
      img: image,
      title: "We are global",
      desc: "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    },
  ];
  return (
    <div className="flex flex-col gap-0 padding-y padding-x">
      <TimelineMobile timeline={data1} />
      <TimelineMobile  timeline={data2}/>
      <TimelineMobile  timeline={data3}/>
    </div>
  );
};

export default MobileTimeline;
