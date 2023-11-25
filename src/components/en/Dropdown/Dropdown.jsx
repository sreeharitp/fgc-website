"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ data, name }) {
  return (
    <div className="text-right relative z-30">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full flex items-center gap-1 justify-center  trans hover:text-[#ed3a1e] 3xl:text-[18px]">
            {name}
            <IoIosArrowDown className=" mt-1" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 3xl:w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((items, index) => (
                <Link href={items.url} key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-[#d0210213] text-[#d02102]" : ""
                        } group flex w-full items-center text-left rounded-md px-4 py-2 text-[15px]  3xl:text-[18px]`}
                      >
                        {items.name}
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
