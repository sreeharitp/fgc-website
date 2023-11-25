import React from "react";
import image from "public/timeline.png";
import TimelineWeb from "./TimelineWeb";

const WebTimeline = () => {
 
  const data1 = [
    {
      id: 1,
      img: image,
      title: "البداية",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز.",
    }

  ];
  const data2 = [

    {
      id: 2,
      img: image,
      title: "مهمة",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز.",
    },

  ];
  const data3 = [
    {
      id: 3,
      img: image,
      title: "نحن عالميون",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. لقد تم الاعتراف والاحتفال بالتزامنا بالتميز.",
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
