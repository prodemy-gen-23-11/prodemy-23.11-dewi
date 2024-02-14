import React from "react";
import Button from "./Button";

export default function Card(props) {
  const { image, name, price } = props;
  return (
    <div>
      <div className=" relative shadow-2xl rounded-lg bg-white overflow-hidden font-serif text-center m-5 hover:scale-105 hover:shadow-rose-700">
        <div className="flex justify-center w-[200px] h-[280px] m-5">
          <img src={image} alt="foto" />
        </div>
        <div className="px-4 text-center h-18">
          <h1 className="text-md font-bold"> {name}</h1>
        </div>
        <div className="text-xl text-center p-4"> {price} </div>
        <div className="w-full h-full absolute inset-0 opacity-0 duration-300 hover:opacity-100 hover:duration-300">
         <div className="mt-48">
            <Button>Add To Cart</Button>
         </div>
      </div>
      </div>
      
    </div>
  );
}
