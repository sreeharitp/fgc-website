import React from "react";
import service1 from "public/service1.png";
import service2 from "public/service2.png";
import service3 from "public/service3.png";
import Image from "next/image";

const services = [
  {
    id: 1,
    img: service1,
    title: "دعم تكنولوجيا المعلومات",
    desc: "من خلال العمل مع العمليات المتوافقة مع ADHICS وISO وأفضل ممارسات الصناعة، نستخدم أنظمة وأدوات رائدة لتقديم دعم تكنولوجيا المعلومات على مستوى عالمي للشركات الصغيرة والمتوسطة وفرق تكنولوجيا المعلومات الداخلية.",
  },
  {
    id: 2,
    img: service2,
    title: "تسليم المشروع",
    desc: "من خلال العمل مع العمليات المتوافقة مع ADHICS وISO وأفضل ممارسات الصناعة، نستخدم أنظمة وأدوات رائدة لتقديم دعم تكنولوجيا المعلومات على مستوى عالمي للشركات الصغيرة والمتوسطة وفرق تكنولوجيا المعلومات الداخلية.",
  },
  {
    id: 3,
    img: service3,
    title: "استمرارية الأعمال",
    desc: 'أفضل خيار للنسخ الاحتياطي والتعافي من الكوارث للشركات، وغالبًا ما يُنظر إليه على أنه "بوليصة تأمين" لبياناتك. تضمن خدمات وحلول استمرارية الأعمال إمكانية استعادة البيانات',
  },
];

const Service = () => {
  return (
    <div className="padding-x padding-y ">
      <h6 className="text-[20px] text-[#D02102] font-semibold mb-4">خدمات</h6>
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[50px] font-semibold">
        تبسيط تكنولوجيا المعلومات
        <br />
        لعالم معقد.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-5 lg:gap-12 mt-12">
        {services.map((items) => (
          <div key={items.id} className="flex flex-col gap-3 ">
            <Image src={items.img} alt="service-img" className="object-cover w-full"/>
            <h5 className="text-[20px] 3xl:text-[24px] font-semibold ">{items.title}</h5>
            <p>{items.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
