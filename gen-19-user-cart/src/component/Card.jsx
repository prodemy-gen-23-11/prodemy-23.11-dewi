
import AddToCart from "./AddToCart";
import { useNavigate } from "react-router-dom";
import { toRupiah } from "../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementCartItem } from "../redux/reducer/cartSlice";
import { useState } from "react";

export default function Card(item) {
  const { id, image, name, price } = item;
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { items } = useSelector((state) => state.cart);
  const userId = useSelector(state=>state.auth.user.id)

  const handlerAddToCart = (item) => {
    const index = items.find((data) => data.productId === id && data.userId === userId) ;
    if (index) {
      const payload = {
        ...index,
        qty: index.qty + qty,
      };
      dispatch(incrementCartItem(payload));
    } else  {
      const payload = {
        userId: userId,
        productId: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        qty,
      };
      dispatch(addToCart(payload));
    }
  };
  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };
 console.log(userId)
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
        {isLoggedIn ? (<div onClick={()=>handlerAddToCart(item)}>
          <AddToCart />
        </div>) : <div onClick={()=> navigate(`/login`)}>
          <AddToCart />
        </div>}
        
      </div>
    </div>
  );
}
