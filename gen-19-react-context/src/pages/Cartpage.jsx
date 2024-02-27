import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/Cartcontext";
import { toRupiah } from "../utils/formatter";

function Cartpage() {
  
  const { items, deleteItem} = useContext(CartContext);
  const[qty, setQty]= useState(1)
  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) 
      setQty(qty - 1); 
  };
  
  return (
    <div className="text-center ">
      <h1 className="section-title m-5">Cart Page</h1>
      <div>
        {items.length ===0 &&(
          <p>No Data in Cart</p>
        )}
        <div className="m-5 p-5">
        {items.map(item =>(
          <div key={item.id} className="grid grid-cols-6 text-xl gap-10 items-center">
            <div><img src={item.image} className="w-24 my-3"/></div>
            <div className="">{item.name}</div>
            <div>{toRupiah(item.price)} </div>
            <div className="flex gap-4 items-center">
            <button className="bg-slate-200 py-2 px-4 rounded-lg" onClick={decrementQty} >-</button>
            <div className="">{qty}</div>
            <button className="bg-slate-200 py-2 px-4 rounded-lg" onClick={incrementQty} >+</button>
            </div>
            <div>
              {toRupiah(item.price*item.qty)}
            </div>
            <div><button onClick={() => deleteItem(item.id)}className="p-3 bg-red-600 text-white">delete</button></div>
          </div>
        ))}
        </div>
        
     
      </div>
    </div>
  );
}

export default Cartpage;
