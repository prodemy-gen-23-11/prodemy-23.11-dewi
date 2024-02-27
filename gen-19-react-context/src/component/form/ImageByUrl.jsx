import React from "react";

export default function ImageByUrl({ register }) {
  return (
    <div>
      <input className="form-style" placeholder="Image url..." {...register("image")} id="image" />
    </div>
  );
}
