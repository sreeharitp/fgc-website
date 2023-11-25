import React from "react";
import solution from "/public/solution-img.png";
import Image from "next/image";
import check from "/public/check-fill.svg";

const SolutionContent = () => {
  const content = [
    {
      id: 1,
      title: "دعم تكنولوجيا المعلومات المدارة",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز.",
    },
    {
      id: 2,
      title: "الأمن الإلكتروني",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز.",
    },
    {
      id: 3,
      title: "نزاهة مركز عملائي",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز.",
    },
    {
      id: 4,
      title: "خدمات تكنولوجيا المعلومات لك",
      desc: "تفتخر شركة Rits بتقديم حلول برمجية حائزة على جوائز.",
    },
  ];

  return (
    <div className="padding-x padding-y flex flex-col sm:flex-row justify-between gap-20">
      <div className="w-full sm:w-3/5">
        <h5 className="font-semibold text-[22px] 3xl:text-[30px] mb-5">
          فوائد خدمات تكنولوجيا المعلومات المدارة
          <br className="hidden sm:block" />
          مقدمة من FGC
        </h5>
        <p className="  mb-10  3xl:text-[20px] opacity-80">
          ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من
          الخبراء، مما يوفر خدمة مخصصة مصممة خصيصًا لتلبية احتياجات الرعاية
          الصحية. سوف FGC بمثابة شريك استراتيجي في مجال تكنولوجيا المعلومات
          وفريق من الخبراء، يقدم خدمة مخصصة التي تم تصميمها لتناسب احتياجات
          الرعاية الصحية.
        </p>
        <ul className="list-disc  mr-5 3xl:text-[20px] opacity-80">
          <li>
            ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من
            الخبراء،
          </li>
          <li>تقديم خدمة مخصصة مصممة خصيصًا للصحة </li>
          <li>احتياجات الرعاية. سيكون FGC بمثابة استراتيجية</li>
          <li>
            شريك تكنولوجيا المعلومات وفريق الخبراء، تقديم خدمة مخصصة مصممة
            لتلبية احتياجات الرعاية الصحية.
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
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
                <h6 className="text-[20px] font-medium mb-3 3xl:text-[24px]">{items.title}</h6>
                <p className="3xl:text-[20px] opacity-80">{items.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-2/5">
        <Image src={solution} alt="service" />
      </div>
    </div>
  );
};

export default SolutionContent;
