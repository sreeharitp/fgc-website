import Image from "next/image";
import solution from "/public/solution-img2.png";
import React from "react";

const SolutionContent2 = () => {
  return (
    <div className="padding-x padding-y flex flex-col-reverse  sm:flex-row justify-start items-start gap-10 ">
      <div className="w-full sm:w-1/2">
        <Image src={solution} alt="service" className="ml-auto" />
      </div>
      <div className="w-full sm:w-1/2 ">
        <h2 className="text-[25px] sm:text-[30px] lg:text-[30px] leading-[40px] sm:leading-[40px] lg:leading-[40px] font-semibold mb-6">
          تتيح لك خدمات تكنولوجيا المعلومات المُدارة لدينا التركيز على ما يهم
        </h2>
        <p className="3xl:text-[20px] opacity-80">
          ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من
          الخبراء، مما يوفر خدمة مخصصة مصممة خصيصًا لتلبية احتياجات الرعاية
          الصحية. سوف FGC بمثابة شريك استراتيجي في مجال تكنولوجيا المعلومات
          وفريق من الخبراء، يقدم خدمة مخصصة التي تم تصميمها لتناسب احتياجات
          الرعاية الصحية.
        </p>
      </div>
    </div>
  );
};

export default SolutionContent2;
