import React from "react";

export default function ImageByFile({ register }) {
  return (
    <div>
      <input
        className="form-style"
        {...register("image")}
        id="image"
        type="file"
      />
    </div>
  );
}
