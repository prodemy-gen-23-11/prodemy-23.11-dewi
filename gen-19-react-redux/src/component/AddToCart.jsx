import React, { useContext } from "react";
import Button from "./Button";


function AddToCart() {
  return (
    // <div className=" absolute inset-0 opacity-0 duration-300  hover:opacity-70 hover:duration-300">
    <div className="mt-18 mb-2 bg-red-600 text-white mx-5 hover:bg-red-700">
      <Button className="">Add To Cart</Button>
    </div>
    // </div>
  );
}
export default AddToCart;
