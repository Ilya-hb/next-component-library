"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SidebarProps } from "./Sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SidebarItems({ menuItems }: SidebarProps) {
  const nestedIndex = menuItems.findIndex(
    (item) => item.nested && item.nested.length > 0
  );

  const [openNested, setOpenNested] = useState(false);

  return (
    <ul className="md:pt-[100px] pt-[40px] w-full text-2xl flex flex-col space-y-5 ">
      {menuItems.map((menuItem, i) => {
        return (
          <motion.li key={i}>
            {i === nestedIndex ? (
              <>
                <button
                  className="flex items-center w-full"
                  onClick={() => setOpenNested(!openNested)}
                >
                  {menuItem.icon}
                  <span className="flex-1 text-left">{menuItem.name}</span>
                  {openNested ? (
                    <ChevronUp className="icon " />
                  ) : (
                    <ChevronDown className="icon " />
                  )}
                </button>
                {openNested &&
                  menuItem.nested?.map((nestedItem, nestedIndex) => {
                    return (
                      <div
                        key={"n" + nestedIndex}
                        className="flex flex-col border-l-2 pl-5 border-white"
                      >
                        <Link href={nestedItem.href}>{nestedItem.name}</Link>
                      </div>
                    );
                  })}
              </>
            ) : (
              <Link
                href={menuItem.href}
                className="flex items-center "
              >
                {menuItem.icon} {menuItem.name}
              </Link>
            )}

            {i !== menuItems.length && <hr className="text-neutral-700 mt-1" />}
          </motion.li>
        );
      })}
    </ul>
  );
}
