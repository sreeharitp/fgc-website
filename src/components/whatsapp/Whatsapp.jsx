import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <div className="fixed right-8 bottom-8 z-50">
      <Link href="">
        <div className="flex items-center justify-center bg-[#25D366] h-[50px]  w-[50px] rounded-full btn-whatsapp-pulse ">
          <FaWhatsapp size={35} className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default Whatsapp;
