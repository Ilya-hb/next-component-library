"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SidebarProps } from "./Sidebar";

export default function SidebarItems({ menuItems }: SidebarProps) {
  return (
    <ul className="md:pt-[100px] pt-[40px] w-full text-2xl flex flex-col space-y-5 ">
      {menuItems.map((menuItem, i) => {
        return (
          <motion.li key={i}>
            <Link
              href={menuItem.href}
              className="flex items-center "
            >
              {menuItem.icon} {menuItem.name}
            </Link>
            {i !== menuItems.length && <hr className="text-neutral-700 mt-1" />}
          </motion.li>
        );
      })}
    </ul>
  );
}
