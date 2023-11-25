import React from "react";
import "./Contact.css"
import Button from "../buttons/Button";

const ContactForm2 = () => {
  return (
    <div className="bg-white w-full lg:w-[450px] 3xl:w-[495px] rounded-[12px] px-6 lg:px-0">
      <div className="px-0 lg:px-10 py-6 border-b">
        <h6 className="text-[20px] font-semibold">Get in touch with us</h6>
      </div>
      <form action="" className="flex flex-col gap-4 px-0 lg:px-10 pb-10 pt-5">
      <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Contact Number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Company Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select name="" id="">
            <option value="">Option</option>
            <option value="">Option</option>
            <option value="">Option</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Queries</label>
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
        <Button text="Submit" url=""/>
      </form>
    </div>
    
  );
};

export default ContactForm2;
