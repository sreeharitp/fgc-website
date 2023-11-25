"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "public/fgc-logo.svg";
import "./Navbar.css";
import { HiMiniBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../buttons/Button";
import Sidebar from "../sidebar/Sidebar";
import { usePathname } from "next/navigation";

const services = [
  {
    name: "دعم تكنولوجيا المعلومات",
    url: "/ar/services/IT Support",
  },
  {
    name: "تسليم المشروع",
    url: "/ar/services/Project Delivery",
  },
  {
    name: "استمرارية الأعمال",
    url: "/ar/services/Business Continuity",
  },
];
const company = [
  {
    name: "معلومات عنا",
    url: "/ar/about",
  },
  {
    name: "فريقنا",
    url: "/ar/our_team",
  },
  {
    name: "الاعتماد الاكاديمي",
    url: "/ar/accreditation",
  },
];

const solution = [
  {
    name: "الخدمات المدارة",
    url: "/ar/solution/Managed Services",
  },
  {
    name: "دعم تكنولوجيا المعلومات",
    url: "/ar/solution/IT Support",
  },
  {
    name: "مجال الاتصالات",
    url: "/ar/solution/Communications",
  },
  {
    name: "خدمات احترافية",
    url: "/ar/solution/Professional Services",
  },
  {
    name: "الأمن الإلكتروني",
    url: "/ar/solution/Cyber Security",
  },
  {
    name: "مُدمج مركز عملائي (CCTV)",
    url: "/ar/solution/MCC Integrator (CCTV)",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  let newPathname = pathname.replace(/\/ar/, "");
  newPathname = newPathname || "/";

  return (
    <>
      <div
        className={`header bg-white z-40 w-full border-b ${
          scrollPosition > 100 ? "fixed  slide-in" : ""
        }`}
      >
        <div className="padding-x flex flex-row-reverse justify-between box-width items-center py-4 3xl:py-6">
          <Link href="/ar">
            <Image src={logo} alt="fgc-logo" />
          </Link>
          <div className="lg:flex flex-row-reverse gap-8 items-center font-medium hidden">
            <Link
              href="/ar"
              className=" hover:text-[#ed3a1e] trans font-semibold font-mada 3xl:text-[18px]"
            >
              الصفحة الرئيسية
            </Link>
            <Dropdown data={services} name="خدمات" />
            <Dropdown data={solution} name="حلول" />
            <Dropdown data={company} name="شركة" />
            <div className="flex flex-col justify-center">
              <span className="text-[#777777] text-[14px] w-full px-6 py-1 m-auto text-center bg-[#EFEFEF] rounded-md font-mada">
                دعم العميل
              </span>
              <Link
                href=""
                className=" hover:text-[#ed3a1e] trans text-[15px] 3xl:text-[18px]"
              >
                +971 03 7640989
              </Link>
            </div>
            <Button text="اتصل بنا" url="/ar/contact" />
            <Link
              href={newPathname}
              className="text-[16px] 3xl:text-[20px] font-medium"
            >
              English
            </Link>
          </div>
          <div className="flex lg:hidden flex-row-reverse items-center gap-5">
            <Link
              href={newPathname}
              className="text-[16px] 3xl:text-[20px] font-medium"
            >
              English
            </Link>
            <div className="" onClick={() => setToggle(!toggle)}>
              <HiMiniBars2 size={20} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "translate-x-0" : "-translate-x-full"
        } w-full sm:w-[300px] h-[100vh] bg-white padding-x  box-shadow trans fixed top-0 left-0 z-50 py-5 lg:hidden flex flex-col gap-10`}
      >
        <div className=" flex flex-row-reverse items-center justify-between">
          <Image src={logo} alt="fgc-logo" />
          <AiOutlineClose
            size={20}
            onClick={() => setToggle(!toggle)}
            className=""
          />
        </div>
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default Navbar;
