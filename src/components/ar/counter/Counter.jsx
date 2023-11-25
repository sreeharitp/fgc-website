import React from "react";
import "./Counter.css";

const counter = [
  {
    id: 1,
    count: 98,
    icon: "",
    text: "%",
    desc: "رضا العملاء",
  },
  {
    id: 2,
    count: 13,
    icon: "",
    text: "سنين",
    desc: " سجل حافل",
  },
  {
    id: 3,
    count: 102,
    icon: "+",
    text: "",
    desc: " العميل في جميع أنحاء الإمارات",
  },
  {
    id: 4,
    count: 200,
    icon: "+",
    text: "المشاريع",
    desc: "  لقد أكملنا",
  },

  {
    id: 5,
    count: 4.8,
    icon: "",
    text: "تقييم",
    desc: "   على أكثر من 300 مراجعة  ",
  },
];

const Counter = () => {
  return (
    <div className="padding-x padding-y">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8">
        {counter.map((items) => (
          <div key={items.id} className="flex justify-center counter">
            <div>
              <div className="flex items-center  gap-1">
                <h2 className="font-semibold text-[35px] lg:text-[40px] leading-[45px] font-gsans">
                  {items.count}
                </h2>
                <span className="font-semibold text-[32px] leading-[40px]">
                  {items.icon}
                </span>
                <p className="pt-2 font-medium opacity-100 3xl:text-[20px]">
                  {items.text}
                </p>
              </div>
              <p className="opacity-100 3xl:text-[20px]">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
