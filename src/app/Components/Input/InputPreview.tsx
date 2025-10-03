import React from "react";
import Input from "./Input";

export default function InputPreview() {
  return (
    <div className="flex flex-col border-neutral-700 border-2 rounded-lg px-10 py-10 gap-5">
      <h2 className="text-3xl font-semibold">Input component preview</h2>
      <Input
        type="number"
        placeholder="Enter your text"
      />
      <Input
        type="password"
        placeholder="Enter your password"
        clearable={true}
      />
    </div>
  );
}
