"use client";

import React, { useState } from "react";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { X } from "lucide-react";

interface InputProps {
  type?: "text" | "password" | "number" | "email";
  placeholder: string;
  clearable?: boolean;
}

export default function Input({
  type = "text",
  placeholder,
  clearable = true,
}: InputProps) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputClear = () => {
    setValue("");
  };

  return (
    <div className="relative">
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-0 rounded-md w-full bg-neutral-900 px-4 py-2 pr-16 focus:outline-0"
        placeholder={placeholder}
      />

      <div className="iconContainer flex flex-row gap-1 cursor-pointer">
        {clearable && value && (
          <X
            onClick={handleInputClear}
            className="icon"
          />
        )}
        {isPassword && (
          <div onClick={handleShowPassword}>
            {showPassword ? (
              <Eye className="icon" />
            ) : (
              <EyeClosed className="icon" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
