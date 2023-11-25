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
    name: "IT Support",
    url: "/services/IT Support",
  },
  {
    name: "Project Delivery",
    url: "/services/Project Delivery",
  },
  {
    name: "Business Continuity",
    url: "/services/Business Continuity",
  },
];
const company = [
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Our Team",
    url: "/our_team",
  },
  {
    name: "Accreditation",
    url: "/accreditation",
  },
];

const solution = [
  {
    name: "Managed Services",
    url: "/solution/Managed Services",
  },
  {
    name: "IT Support",
    url: "/solution/IT Support",
  },
  {
    name: "Communications",
    url: "/solution/Communications",
  },
  {
    name: "Professional Services",
    url: "/solution/Professional Services",
  },
  {
    name: "Cyber Security",
    url: "/solution/Cyber Security",
  },
  {
    name: "MCC Integrator (CCTV)",
    url: "/solution/MCC Integrator (CCTV)",
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
  const newPathname = `/ar${pathname}`;

  return (
    <>
      <div
        className={`header bg-white z-40 w-full border-b ${
          scrollPosition > 100 ? "fixed w-full slide-in" : ""
        }`}
      >
        <div className="padding-x box-width flex flex-row justify-between items-center py-4 3xl:py-6 ">
          <Link href="/">
            <Image src={logo} alt="fgc-logo" />
          </Link>
          <div className="lg:flex flex-row gap-8 items-center font-medium hidden">
            <Link
              href="/"
              className=" hover:text-[#ed3a1e] trans 3xl:text-[18px]"
            >
              Home
            </Link>
            <Dropdown data={services} name="Services" />
            <Dropdown data={solution} name="Solutions" />
            <Dropdown data={company} name="Company" />
            <div className="flex flex-col justify-center">
              <span className="text-[#777777] text-[13px] px-3 py-1 bg-[#EFEFEF] rounded-md">
                Client Support+
              </span>
              <Link
                href=""
                className=" hover:text-[#ed3a1e] trans text-[15px] 3xl:text-[18px]"
              >
                +971 03 7640989
              </Link>
            </div>
            <Button text="Contact Us" url="/contact" />
            <Link
              href={newPathname}
              className="text-[20px] font-medium font-mada 3xl:text-[22px]"
            >
              العربية
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <Link
              href={newPathname}
              className="text-[20px] font-medium font-mada 3xl:text-[22px]"
            >
              العربية
            </Link>
            <div className="" onClick={() => setToggle(!toggle)}>
              <HiMiniBars2 size={20} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "-translate-x-0" : "translate-x-full"
        } w-full sm:w-[300px] h-[100vh] bg-white padding-x trans fixed top-0 right-0 z-50 py-5 lg:hidden flex flex-col gap-10`}
      >
        <div className=" flex items-center justify-between">
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
