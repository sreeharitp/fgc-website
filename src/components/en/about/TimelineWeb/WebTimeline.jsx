import React from "react";
import image from "public/timeline.png";
import TimelineWeb from "./TimelineWeb";

const WebTimeline = () => {
  const data1 = [
    {
      id: 1,
      img: image,
      title: "The Begining",
      desc: "Rits is proud to offer award-winning software solutions. Our commitment to excellence has been recognized and celebrated.",
    },
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
      <TimelineWeb timeline={data1} />
      <TimelineWeb timeline={data2} />
      <TimelineWeb timeline={data3} />
    </div>
  );
};

export default WebTimeline;
