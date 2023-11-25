import React from "react";
import Button from "../buttons/Button";

const Cta = () => {
  return (
    <div className=" linear-gradient  padding-y">
      <div className="padding-x padding-y box-width text-center">
        <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold">
          فريق مبني على الخبرة
        </h2>
        <p className="mt-6 mb-16 3xl:text-[20px] opacity-80">
          ستعمل FGC كشريك استراتيجي في مجال تكنولوجيا المعلومات وفريق من
          الخبراء، حيث تقدم خدمة مخصصة
          <br />
          التي تم تصميمها لتناسب احتياجات الرعاية الصحية.
        </p>
        <div className="flex justify-center">
          <Button text="قابل الفريق" url="" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
