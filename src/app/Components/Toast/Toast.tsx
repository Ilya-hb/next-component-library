"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration: number;
}

export default function Toast({ message, type, duration }: ToastProps) {
  const [visible, setIsVisible] = useState(false);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="rounded-lg px-4 py-2 cursor-pointer transition-colors bg-white hover:bg-neutral-200 flex gap-2 text-black"
      >
        {type}
      </button>
      <>
        {mounted &&
          createPortal(
            <>
              <AnimatePresence>
                {visible && (
                  <>
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 100 }}
                      exit={{ y: "100%", opacity: 0 }}
                      className="bg-black border-2 rounded-lg border-white p-5 fixed bottom-10 right-10 w-[300px] h-fit flex flex-col z-[60]"
                    >
                      <div
                        className="absolute top-2 right-2 cursor-pointer icon"
                        onClick={() => setIsVisible(false)}
                      >
                        <X />
                      </div>
                      <h2 className="text-lg font-semibold">
                        {type.toUpperCase()}
                      </h2>
                      <p>{message}</p>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </>,
            document.body
          )}
      </>
    </>
  );
}
