import React from "react";
import feature1 from "public/feature1.svg";
import feature2 from "public/feature2.svg";
import feature3 from "public/feature3.svg";
import feature4 from "public/feature4.svg";
import Image from "next/image";

const Features = () => {
  const feature = [
    {
      id: 1,
      icon: feature1,
      title: "شغوف",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. ",
    },
    {
      id: 2,
      icon: feature2,
      title: "محترم",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. ",
    },
    {
      id: 3,
      icon: feature3,
      title: "ملكية",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. ",
    },
    {
      id: 4,
      icon: feature4,
      title: "موحد",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز. ",
    },
  ];

  return (
    <div className="padding-x padding-bottom">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-5">
        {feature.map((items) => (
          <div key={items.id}>
            <Image
              src={items.icon}
              height={70}
              width={70}
              className="3xl:h-[115px] 3xl:w-[115px] 3xl:-mr-5"
            />
            <h6 className="text-[20px] font-medium my-3 3xl:text-[24px] ">{items.title}</h6>
            <p>{items.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
