import Image from "next/image";
import React from "react";
import logo from "public/logo-white.svg";
import urs from "public/urs.svg";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    title: "تابعنا",
    items: [
      { id: 1, name: "الفاتورة الرقمية ", url: "" },
      { id: 2, name: "شركة ", url: "" },
      { id: 3, name: "خدمات", url: "" },
      { id: 4, name: "الفاتورة الرقمية", url: "" },
      { id: 5, name: "أفكار", url: "" },
    ],
  },
  {
    id: 2,
    title: "شركة",
    items: [
      { name: "شركة ", url: "" },
      { name: "أفكار", url: "" },
      { name: "الفاتورة الرقمية", url: "" },
    ],
  },
  {
    id: 3,
    title: "حلول",
    items: [
      { name: "خدمات", url: "" },
      { name: "أفكار ", url: "" },
      { name: "شركة", url: "" },
      { name: "الفاتورة الرقمية ", url: "" },
      { name: "شركة", url: "h" },
    ],
  },
  {
    id: 4,
    title: "خدمات",
    items: [
      { name: "الفاتورة الرقمية", url: "" },
      { name: "أفكار", url: "" },
      { name: "السداد", url: "" },
      { name: "أفكار", url: "" },
      { name: "خدمات", url: "" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#000000] w-full">
      <div className="padding-x padding-top box-width text-[#d1d1d1] font-mada">
        <div className=" flex lg:flex-row-reverse flex-col justify-end gap-20 mb-10">
          <div className="w-full sm:w-1/2 lg:w-1/4 text-end ml-auto">
            <Link href="/">
              <Image src={logo} alt="fgc-logo" className="ml-auto" />
            </Link>
            <p className="py-4 mb-12 opacity-100 3xl:text-[18px] leading-7 ">
              يتم تدريب جميع الفنيين لدينا على أعلى مستوى، مع سنوات من الخبرة
              تحت أحزمتهم.
            </p>
            <div className="flex items-center gap-4 justify-end">
              <Image src={urs} height={85} width={85} alt="urs-logo" />
              <Image src={urs} height={85} width={85} alt="urs-logo" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-4 col-span-4 gap-4 text-end">
              {footerLinks.map((links) => (
                <div key={links.id}>
                  <h6 className="text-[20px] font-semibold mb-8 text-white">
                    {links.title}
                  </h6>
                  <ul>
                    {links.items.map((items) => (
                      <li className="mb-5" key={items.id}>
                        <Link
                          href={items.url}
                          className="hover:text-[#ed3a1e] trans"
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
        <div className="flex items-start sm:items-center flex-col sm:flex-row-reverse justify-between border-t border-[#443634] py-8">
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row items-end sm:items-start justify-end">
              <p className=" sm:border-r border-[#a4a4a4] px-0 sm:px-5   opacity-100">
                سياسة الخصوصية
              </p>
              <p className=" sm:border-r border-[#a4a4a4] px-0 sm:px-5  opacity-100">
                البنود و الظروف
              </p>
              <p className=" px-0 sm:px-5 opacity-100 !pr-0">
                سياسة ملفات الارتباط
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 text-end sm:text-start mt-5 sm:mt-0">
            <p className="opacity-100">
              {" "}
              <span className="font-gsans">FGC 2023 ©</span> حقوق الطبع والنشر{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
