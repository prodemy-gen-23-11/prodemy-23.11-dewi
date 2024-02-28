
import AddToCart from "./AddToCart";
import { useNavigate } from "react-router-dom";
import { toRupiah } from "../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";
import { useState } from "react";

export default function Card(data) {
  const { id, image, name, price } = data;
  const navigate = useNavigate();
  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  
  const [qty, setQty] = useState(1);
  const handlerAddToCart = () => {
    const payload = {
      ...data,
      qty
    };
    dispatch(addToCart(payload));
  };
 
  return (
    <div>
      <div
        c
        className=" relative shadow-2xl rounded-lg bg-white overflow-hidden font-serif text-center m-5 hover:scale-105 hover:shadow-rose-700"
      >
        <div className="flex justify-center w-[200px] h-[280px] m-5">
          <img src={image} alt="foto" onClick={() => onClickCard(id)} />
        </div>
        <div className="px-4 text-center h-18">
          <h1 className="text-md font-bold"> {name}</h1>
        </div>
        <div className="text-xl text-center p-4"> {toRupiah(price)} </div>
        <div onClick={handlerAddToCart}>
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
