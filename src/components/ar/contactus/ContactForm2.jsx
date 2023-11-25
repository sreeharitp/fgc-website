import React from "react";
import "./Contact.css";
import Button from "../buttons/Button";

const ContactForm2 = () => {
  return (
    <div className="bg-white w-full lg:w-[450px] 3xl:w-[495px] rounded-[12px] px-6 lg:px-0">
      <div className="px-0 lg:px-10 py-6 border-b">
        <h6 className="text-[20px] font-semibold">ابق على تواصل معنا</h6>
      </div>
      <form action="" className="flex flex-col gap-2 px-0 lg:px-10 pb-8 pt-5">
        <div>
          <label htmlFor="">اسم</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">رقم الاتصال</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">البريد الإلكتروني للشركة</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">هاتف</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">عنوان</label>
          <select name="" id="">
            <option value="">خيار</option>
            <option value="">خيار</option>
            <option value="">خيار</option>
          </select>
        </div>
        <div>
          <label htmlFor="">الاستعلامات</label>
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
        <Button text="يُقدِّم" url="" />
      </form>
    </div>
  );
};

export default ContactForm2;
