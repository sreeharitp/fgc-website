import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function Sidebar({ toggle, setToggle }) {
  const menus = [
    {
      id: 1,
      title: "خدمات",
      items: [
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
      ],
    },
    {
      id: 2,
      title: "حلول",
      items: [
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
      ],
    },
    {
      id: 3,
      title: "شركة",
      items: [
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
      ],
    },
  ];
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    if (openPanel === panel) {
      setOpenPanel(null);
    } else {
      setOpenPanel(panel);
    }
  };

  return (
    <div className="px-2 font-mada">
      <Link
        onClick={() => setToggle(!toggle)}
        href="/ar"
        className="w-full text-left text-[24px] font-semibold py-4 flex items-center justify-end gap-3"
      >
        بيت
      </Link>
      {menus.map((links) => (
        <Disclosure defaultOpen={false} key={links.id}>
          {({ open }) => (
            <>
              <button
                className={`w-full text-left text-[24px] font-semibold py-4 flex flex-row-reverse items-center justify-between gap-3 ${
                  openPanel == links.id ? "text-[#D02102]" : ""
                }`}
                onClick={() => togglePanel(links.id)}
              >
                {links.title}
                <IoIosArrowDown
                  size={24}
                  className={`${
                    openPanel == links.id ? "rotate-180 transform" : ""
                  }  text-black`}
                />
              </button>
              <Disclosure.Panel static={openPanel == links.id}>
                <ul className="px-5">
                  {links.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-[22px] font-medium py-3 text-end"
                      onClick={() => setToggle(!toggle)}
                    >
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      <Link
        onClick={() => setToggle(!toggle)}
        href="/ar/contact"
        className="w-full text-left text-[24px] font-semibold py-4 flex items-center justify-end gap-3"
      >
        اتصل بنا
      </Link>
    </div>
  );
}

export default Sidebar;
