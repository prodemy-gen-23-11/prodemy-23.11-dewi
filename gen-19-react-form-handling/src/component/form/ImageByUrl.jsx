import React from "react";

export default function ImageByUrl({ register }) {
  return (
    <div>
      <input
        placeholder="image url..."
        className="form-style"
        {...register("image")}
        id="image"
      />
    </div>
  );
}
