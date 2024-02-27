import React, { useContext, useState } from "react";
import AddToCart from "./AddToCart";

import { useNavigate } from "react-router-dom";
import CartContext from "../context/Cartcontext";
import { toRupiah } from "../utils/formatter";

export default function Card(props) {
  const {items, setItems, qty} = useContext(CartContext)
 
  const { id, image, name, price } = props;
  const navigate = useNavigate();
  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };
  function addToCart(){
    const productExist = items.find((item)=>item.id === id);
    if (productExist){
      setItems(items.map((item)=>item.id===id ? {...item, qty: item.qty + 1} : item))
    }
    else{
      setItems([...items, {...props, qty: 1}])
    }
  }
 console.log(items)
  return (
    <div >
      <div c
        className=" relative shadow-2xl rounded-lg bg-white overflow-hidden font-serif text-center m-5 hover:scale-105 hover:shadow-rose-700"
       
      >
          <div className="flex justify-center w-[200px] h-[280px] m-5">
            <img src={image} alt="foto"  onClick={() => onClickCard(id)}/>
          </div>
          <div className="px-4 text-center h-18">
            <h1 className="text-md font-bold"> {name}</h1>
          </div>
          <div className="text-xl text-center p-4"> {toRupiah(price)}  </div>
          <div onClick={() => addToCart()}>
          <AddToCart  />
          </div>
          
       
      </div>
     
    </div>
  );
}
