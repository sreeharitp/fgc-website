import React from "react";
import TimelineMobile from "./TimelineMobile";
import image from "public/timeline.png";


const MobileTimeline = () => {

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
      <TimelineMobile timeline={data1} />
      <TimelineMobile  timeline={data2}/>
      <TimelineMobile  timeline={data3}/>
    </div>
  );
};

export default MobileTimeline;
