import React from "react";
import "./Contact.css";
import Button from "../buttons/Button";

const ContactForm = () => {
  return (
    <div className="bg-white w-full lg:w-[450px] 3xl:w-[495px] rounded-[12px] px-6 lg:px-0 font-mada">
      <div className="px-0 lg:px-10 py-6 border-b">
        <h6 className="text-[20px] font-semibold">ابق على تواصل معنا</h6>
      </div>
      <form
        action=""
        className="flex flex-col gap-3 3xl:gap-4 px-0 lg:px-10 pb-10 pt-5"
      >
        <div>
          <label htmlFor="">اسم</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">الشركة/المنظمة</label>
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
          <label htmlFor="">كيف يمكننا مساعدتك؟</label>
          <select name="" id="">
            <option value="">حدد اختيارا</option>
            <option value="">حدد اختيارا</option>
            <option value="">حدد اختيارا</option>
          </select>
        </div>
        <div>
          <label htmlFor="">رسالة</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="اكتب رسالة..."
          ></textarea>
        </div>
        <Button text="يُقدِّم" url="" />
      </form>
    </div>
  );
};

export default ContactForm;
