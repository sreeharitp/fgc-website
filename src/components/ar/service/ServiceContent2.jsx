import React from "react";
import check from "/public/check-fill.svg";
import Image from "next/image";

const ServiceContent2 = () => {
  const content = [
    {
      id: 1,
      title: "دعم تكنولوجيا المعلومات المدارة",
      desc: " لدينا عمليات ناضجة مبنية وفقًا لمعايير امتثال الصناعة وADHICS وISO. يتم تقديم الخدمات باستخدام مجموعة من أفضل أدوات إدارة خدمات تكنولوجيا المعلومات F-SECURE وأدوات الدعم التي توفر أفضل تجربة ممكنة للعملاء.",
    },
    {
      id: 2,
      title: "دعم تكنولوجيا المعلومات المدارة",
      desc: " لدينا عمليات ناضجة مبنية وفقًا لمعايير امتثال الصناعة وADHICS وISO. يتم تقديم الخدمات باستخدام مجموعة من أفضل أدوات إدارة خدمات تكنولوجيا المعلومات F-SECURE وأدوات الدعم التي توفر أفضل تجربة ممكنة للعملاء.",
    },
    {
      id: 3,
      title: "دعم تكنولوجيا المعلومات المدارة",
      desc: " لدينا عمليات ناضجة مبنية وفقًا لمعايير امتثال الصناعة وADHICS وISO. يتم تقديم الخدمات باستخدام مجموعة من أفضل أدوات إدارة خدمات تكنولوجيا المعلومات F-SECURE وأدوات الدعم التي توفر أفضل تجربة ممكنة للعملاء.",
    },
    {
      id: 4,
      title: "دعم تكنولوجيا المعلومات المدارة",
      desc: " لدينا عمليات ناضجة مبنية وفقًا لمعايير امتثال الصناعة وADHICS وISO. يتم تقديم الخدمات باستخدام مجموعة من أفضل أدوات إدارة خدمات تكنولوجيا المعلومات F-SECURE وأدوات الدعم التي توفر أفضل تجربة ممكنة للعملاء.",
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
