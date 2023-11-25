import Image from "next/image";
import React from "react";
import logo from "public/logo-white.svg";
import urs from "public/urs.svg";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    title: "Services",
    items: [
      { name: "IT Support", url: "" },
      { name: "Project Delivery", url: "" },
      { name: "Business Continuity", url: "" },
      { name: "Virtual Assistant", url: "" },
      { name: "Artificial Intelligence", url: "" },
    ],
  },
  {
    id: 2,
    title: "Solutions",
    items: [
      { name: "Managed Services", url: "" },
      { name: "IT Support ", url: "" },
      { name: "Communications ", url: "" },
      { name: "Professional Services ", url: "" },
      { name: "MCC Integrator ", url: "h" },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      { name: "FAQ ", url: "" },
      { name: "Events ", url: "" },
      { name: "Ebook & Guide ", url: "" },
    ],
  },
  {
    id: 4,
    title: "Follow Us",
    items: [
      { id: 1, name: "LinkedIn ", url: "" },
      { id: 2, name: "Twitter ", url: "" },
      { id: 3, name: "Instagram", url: "" },
      { id: 4, name: "Facebook", url: "" },
      { id: 5, name: "YouTube", url: "" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#000000] w-full">
      <div className="padding-x padding-top box-width text-[#d1d1d1]">
        <div className=" flex lg:flex-row flex-col justify-between gap-20 mb-10">
          <div className="w-full lg:w-1/4">
            <Link href="/">
              <Image src={logo} alt="fgc-logo" />
            </Link>
            <p className="py-4 mb-12 opacity-100 3xl:text-[18px] leading-7 ">
              All of our technicians are trained to the highest level, with
              <br className="hidden sm:block lg:hidden" /> years of experience
              under their belts.
            </p>
            <div className="flex items-center gap-4 ">
              <Image src={urs} height={85} width={85} alt="urs-logo" />
              <Image src={urs} height={85} width={85} alt="urs-logo" />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-4 col-span-4 gap-4">
              {footerLinks.map((links) => (
                <div key={links.id}>
                  <h6 className="text-[20px] font-semibold mb-6 text-white">
                    {links.title}
                  </h6>
                  <ul>
                    {links.items.map((items) => (
                      <li className="mb-5" key={items.id}>
                        <Link
                          href={items.url}
                          className="hover:text-[#ed3a1e]  trans"
                        >
                          {items.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start sm:items-center flex-col sm:flex-row justify-between border-t border-[#443634] py-9">
          <div className="w-1/2">
            <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-start sm:items-center">
              <p className=" border-r border-[#a4a4a4] px-0 sm:px-8 !pl-0  opacity-100">
                Privacy&nbsp;Policy
              </p>
              <p className=" border-r border-[#a4a4a4] px-0 sm:px-8  opacity-100">
                Terms&nbsp;&&nbsp;Conditions
              </p>
              <p className=" px-0 sm:px-8 opacity-100">Cookie&nbsp;Policy</p>
            </div>
          </div>
          <div className="w-1/2 text-start sm:text-end mt-5 sm:mt-0">
            <p className="opacity-100">Copyright © FGC 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
