import React from "react";
import Toast from "./Toast";

export default function ToastPreview() {
  return (
    <div className="flex flex-col border-neutral-700 border-2 rounded-lg px-10 py-10 gap-5">
      <h2 className="text-3xl font-semibold">Toast component preview</h2>
      <Toast
        message="You successufully received a message"
        type="success"
      />
      <Toast
        message="You successufully received an error"
        type="error"
      />
      <Toast
        message="You successufully received an info"
        type="info"
      />
    </div>
  );
}
