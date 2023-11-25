import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function Sidebar({ toggle, setToggle }) {
  const menus = [
    {
      id: 1,
      title: "Services",
      items: [
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
      ],
    },
    {
      id: 2,
      title: "Solutions",
      items: [
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
      ],
    },
    {
      id: 3,
      title: "Company",
      items: [
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
    <div className="px-2">
      <Link
        onClick={() => setToggle(!toggle)}
        href="/"
        className="w-full text-left text-[24px] font-semibold py-4 flex items-center justify-between gap-3    "
      >
        Home
      </Link>
      {menus.map((links) => (
        <Disclosure defaultOpen={false} key={links.id}>
          {({ open }) => (
            <>
              <button
                className={`w-full text-left text-[24px] font-semibold py-4 flex items-center justify-between gap-3 ${
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
                      className="text-[22px] font-medium py-3"
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
        href="/contact"
        className="w-full text-left text-[24px] font-semibold py-4 flex items-center justify-between gap-3    "
      >
        Contact Us
      </Link>
    </div>
  );
}

export default Sidebar;
