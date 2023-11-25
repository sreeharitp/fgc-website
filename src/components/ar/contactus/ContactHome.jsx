import React from "react";
import Button from "../buttons/Button";
import contact from "public/contact.png"
import Image from "next/image";

const ContactHome = () => {
  return (
    <div className="padding-x padding-y text-center">
      <p className="text-[#E4361A] text-[18px] 3xl:text-[20px] font-medium">اتصال</p>
      <h2 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[40px] sm:leading-[45px] lg:leading-[55px] font-semibold my-6">
      دعم تكنولوجيا المعلومات للشركات الصغيرة والمتوسطة والفرق الداخلية
      </h2>
      <div className="flex items-center justify-center gap-10">
        <p className="text-[18px] 3xl:text-[20px] font-semibold text-right">
        اتصل بنا :
          <br />
          +97137813311
        </p>
        <p className="text-[18px] 3xl:text-[20px] font-semibold text-right">
        بريد إلكتروني :
          <br />
          mail@fgcllc.ae
        </p>
      </div>
      <div className="flex items-center justify-center py-10">
        <Button text="الاستفسار الآن" url="" />
      </div>
      <Image src={contact} className="rounded-[12px] w-full h-[200px] sm:h-auto object-cover mt-3" alt="contact-banner"/>
    </div>
  );
};

export default ContactHome;
