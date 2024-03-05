import React from "react";

export default function PreviewByUrl({ register }) {
  return (
    <div className="flex gap-2">
      <input
        placeholder="preview url..."
        className="form-style"
        {...register("preview[0]")}
        id="preview"
      />
      <input
        placeholder="preview url..."
        className="form-style"
        {...register("preview[1]")}
        id="preview"
      />
      <input
        placeholder="preview url..."
        className="form-style"
        {...register("preview[2]")}
        id="preview"
      />
    </div>
  );
}
