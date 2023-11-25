import React from "react";
import "./Contact.css";
import Button from "../buttons/Button";
import { IoCloudUploadSharp } from "react-icons/io5";

const ContactForm3 = () => {
  return (
    <div className="bg-white w-full lg:w-[450px] 3xl:w-[495px] sm:rounded-[12px] px-6 lg:px-0">
      <div className="px-0 lg:px-10 py-6 border-b">
        <h6 className="text-[20px] font-semibold">ابق على تواصل معنا</h6>
      </div>
      <form action="" className="flex flex-col gap-4 px-0 lg:px-10 pb-10 pt-5">
        <div>
          <label htmlFor="">اسم</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">عنوان البريد الإلكتروني</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">هاتف</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">تطبيق المشاركة</label>
          <select name="" id="">
            <option value="">خيار</option>
            <option value="">خيار</option>
            <option value="">خيار</option>
          </select>
        </div>
        <div>
          <label htmlFor="">تحميل السيرة الذاتية</label>
          <div className="flex items-center relative">
            <input type="text" placeholder="Upload cv ( doc or PDF )" />
            <IoCloudUploadSharp
              size={22}
              className="absolute left-3 text-[#9B9B9B]"
            />
            <input type="file" className="absolute opacity-0" />
          </div>
        </div>
        <div>
          <label htmlFor="">غطاء الرسالة</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="اكتب ملخصًا"
          ></textarea>
        </div>
        <Button text="قدم الآن" url="" />
      </form>
    </div>
  );
};

export default ContactForm3;
