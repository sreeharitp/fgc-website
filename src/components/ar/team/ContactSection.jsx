import React from "react";
import Contactus3 from "../contactus/Contactus3";

const ContactSection = () => {
  return (
    <div className="sm:bg-contact padding-y w-full bg-cover bg-no-repeat">
      <div className="text-center mb-10">
        <h6 className="text-[20px] text-[#E4361A] font-medium mb-4">
          حياة مهنية
        </h6>
        <h2 className="text-[30px] sm:text-white sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold mb-6">
          سوف تحظى بفرصة لتعرفنا أكثر
        </h2>
        <p className="3xl:text-[20px] opacity-80 sm:text-white">
          يتمتع موظفونا بمجموعة من الشهادات والدرجات العلمية المعترف بها في
          الصناعة{" "}
        </p>
      </div>
      <Contactus3 />
    </div>
  );
};

export default ContactSection;
