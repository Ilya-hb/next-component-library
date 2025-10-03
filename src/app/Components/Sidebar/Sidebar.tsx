"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { PanelRightClose, PanelLeftClose } from "lucide-react";
import SidebarItems from "./SidebarItems";

export interface Sidebar {
  name: string;
  href: string;
  icon?: React.ReactNode;
  nested?: Sidebar[];
}
export interface SidebarProps {
  menuItems: Sidebar[];
}

export default function Sidebar({ menuItems }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <button
        className=" rounded-lg px-4 py-2 cursor-pointer transition-colors bg-white hover:bg-neutral-200 flex gap-2 text-black"
        onClick={() => setShowSidebar(true)}
      >
        Show sidebar
        <PanelLeftClose className="icon" />
      </button>
      <>
        {isMounted &&
          createPortal(
            <>
              <AnimatePresence>
                {showSidebar && (
                  <>
                    <motion.div
                      key={"overlay"}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowSidebar(false)}
                      className={`w-screen h-screen bg-black z-40 fixed top-0 `}
                    ></motion.div>
                    <motion.aside
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      key={"aside"}
                      className={`h-screen z-50 w-[350px] bg-black fixed top-0 right-0 px-5 py-2 flex flex-col items-end`}
                    >
                      <div className="flex justify-between w-full pt-5 ">
                        <h2 className="text-3xl">Navigation</h2>
                        <PanelRightClose
                          onClick={() => setShowSidebar(false)}
                          className="icon w-8 h-8"
                        />
                      </div>

                      <SidebarItems menuItems={menuItems} />
                    </motion.aside>
                  </>
                )}
              </AnimatePresence>
            </>,
            document.body
          )}
      </>
      ,
    </>
  );
}
