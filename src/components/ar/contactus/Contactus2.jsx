import React from "react";
import check from "public/check.svg";
import Image from "next/image";
import ContactForm2 from "./ContactForm2";

const Contactus2 = () => {
  const benefits = [
    {
      id: 1,
      text: "موجه نحو العميل",
    },
    {
      id: 2,
      text: "نتيجة مدفوعة",
    },
    {
      id: 3,
      text: "مستقل",
    },
    {
      id: 4,
      text: "شفاف",
    },
    {
      id: 5,
      text: "كفؤ",
    },
    {
      id: 6,
      text: "حل المشاكل",
    },
  ];

  return (
    <div className="lg:padding-x padding-y">
      <div className="w-full h-[250px] 3xl:h-[315px] bg-[#2C1B1A] flex flex-col justify-between p-8  rounded-t-0 lg:rounded-t-[12px] relative">
        <div className="absolute left-10 top-20 z-20 hidden lg:block">
          <ContactForm2 />
        </div>
        <p className="text-white opacity-100 3xl:text-[20px]">اتصل بنا</p>
        <h2 className="text-[28px] font-semibold text-[#FFD3CC] leading-[40px] 3xl:text-[40px]">
          لا تخجل، فقط أخبرنا عنها
          <br className="hidden sm:block" />
          بنفسك وسنكتشف ذلك
          <br className="hidden sm:block" />
          الخيار الأفضل.
        </h2>
      </div>
      <div className="p-8 bg-[#F0F0F0] h-[580px]  3xl:h-[550px] flex flex-col justify-between  rounded-b-[12px]">
        <div>
          <h6 className="text-[20px] font-semibold mb-2 3xl:text-[24px]">الاتصالات العامة</h6>
          <p className="mb-5 3xl:text-[20px]">
            للاستفسارات العامة، بما في ذلك فرص الامتياز، يرجى إرسال بريد
            إلكتروني
            <br className="hidden sm:block" />
            mail@rits.ae
          </p>
          <h6 className="text-[20px] font-semibold mb-2 3xl:text-[24px]">المبيعات والدعم</h6>
          <p className="mb-4 3xl:text-[20px]">
            للمبيعات والمالية وإدارة المكاتب وغيرها، يرجى إرسال بريد إلكتروني
            <br className="hidden sm:block" />
            sales@rits.ae
          </p>
        </div>
        <div className="pb-10">
          <h6 className="text-[20px] font-semibold mb-4">المنافع الخاصة بك</h6>
          <div className="grid grid-cols-2 gap-2 lg:gap-4 w-full sm:w-1/2 lg:w-1/3">
            {benefits.map((items) => (
              <div className="flex items-center gap-2" key={items.id}>
                <Image src={check} height={20} width={20} alt="check" />
                <p className="3xl:text-[20px]">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ContactForm2 />
      </div>
    </div>
  );
};

export default Contactus2;
