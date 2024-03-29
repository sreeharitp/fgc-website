import React from "react";
import medal from "public/medal.svg";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: 1,
    img: medal,
    title: "الخدمات المدارة",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
  {
    id: 2,
    img: medal,
    title: "دعم تكنولوجيا المعلومات",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
  {
    id: 3,
    img: medal,
    title: "مجال الاتصالات",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
  {
    id: 4,
    img: medal,
    title: "خدمات احترافية",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
  {
    id: 5,
    img: medal,
    title: "الأمن الإلكتروني",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
  {
    id: 6,
    img: medal,
    title: "مُدمج مركز عملائي (CCTV)",
    desc: "يمكن لقدرات دعم تكنولوجيا المعلومات التي لا مثيل لها لدينا أن تساعد جميع أحجام الأعمال والفرق الداخلية، بغض النظر عن احتياجاتك.",
    url: "",
  },
];

const Solution = () => {
  return (
    <div className="linear-gradient">
      <div className="padding-x  padding-y box-width">
        <div className="text-center ">
          <h6 className="text-[20px] text-[#D02102] font-medium mb-4">
            كيف نفعل
          </h6>
          <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-6">
            حلول
          </h2>
          <p className="3xl:text-[20px] opacity-80">
            ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من
            الخبراء، حيث تقدم خدمة مخصصة <br />
            مصممة خصيصًا لتلبية احتياجات الرعاية الصحية.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {solutions.map((items) => (
            <div
              key={items.id}
              className="flex flex-col bg-white rounded-[10px] "
            >
              <div className="p-5 flex flex-col gap-3">
                <Image src={items.img} alt="icon" className="ml-auto" />
                <h5 className="text-[20px] 3xl:text-[24px] font-semibold ">{items.title}</h5>
                <p>{items.desc}</p>
              </div>
              <div className="p-4 border-t border-[#D6D6D6] leading-4">
                <Link
                  href={items.url}
                  className="text-[#D02102] text-[15px] font-medium underline"
                >
                  يتعلم أكثر
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
