import React from "react";
import service from "/public/service-img2.png";
import Image from "next/image";

const ServiceContent3 = () => {
  return (
    <div className="padding-x padding-y flex flex-col-reverse sm:flex-row items-center justify-between gap-10 lg:gap-20  ">
      <div className=" w-full sm:w-1/2">
        <Image src={service} alt="service" />
      </div>
      <div className=" w-full sm:w-1/2">
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-5 lg:mb-10">
          لا رسوم خفية
        </h2>
        <p className="3xl:text-[20px] opacity-80">
          نحن دائمًا شفافون بشأن أسعارنا. لا توجد رسوم مخفية بفضل الدعم المُدار
          من جانب تكنولوجيا المعلومات، لن تشعر بأي شيء مزعج على الإطلاق مفاجآت.
          أنت تدفع فقط مقابل ما تحتاجه، وأسعار الرسوم الثابتة لدينا يساعد
          النموذج على التدفق النقدي والتخطيط المالي.
        </p>
      </div>
    </div>
  );
};

export default ServiceContent3;
