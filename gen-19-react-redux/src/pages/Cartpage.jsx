import React, { useContext, useEffect, useState } from "react";

import { toRupiah } from "../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, remove, removeOne } from "../redux/action/action";
import { Link } from "react-router-dom";

function Cartpage() {
  
  const { cart } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch();



  return (
    <div className="text-center ">
      <Link to={"/"}><h1 className="section-title m-5">Cart Page</h1></Link>
      <div className="grid grid-cols-6 text-xl gap-10 items-center th-style mx-10">
        <div></div>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div></div>
      </div>
      <div>
        {cart.length === 0 && <p>No Data in Cart</p>}
        <div className="mx-5 px-5 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 text-xl gap-10 items-center  border-b border-gray-500 rounded-lg"
            >
              <div className="flex justify-center">
                <img src={item.image} className="w-24 my-3 rounded-md" />
              </div>
              <div className="">{item.name}</div>
              <div>{toRupiah(item.price)} </div>
              <div className="flex gap-4 items-center">
                <button
                  className="bg-slate-200 py-2 px-4 rounded-lg"
                  onClick={
                    item.qty === 1
                      ? () => dispatch(remove(item.id))
                      : () => dispatch(removeOne(item))
                  }
                >
                  -
                </button>
                <div className="">{item.qty}</div>
                <button
                  className="bg-slate-200 py-2 px-4 rounded-lg"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
              <div>{toRupiah(item.price * item.qty)}</div>
              <div>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="p-3 bg-red-600 text-white  hover:bg-red-700 regular-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
