import { toRupiah } from "../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header2 from "../layout/Header2";
import {
  addToCart,
  decrementCartItem,
  fetchData,
  incrementCartItem,
  removeData,
} from "../redux/reducer/cartSlice";
import axios from "axios";
import useSWR from "swr";

function Cartpage() {
  const [qty, setQty] = useState(1);
  const items = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.user.id);
  const dataCart = items
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchData(userId)); 
    }
  }, []);
  console.log(items)
  const handleDelete = (id) => {
    dispatch(removeData(id));
  };
  const handleIncrement = (id) => {
    const foundData = items.find((data) => data.userId === id);
    const payload = {
      userId,
      ...foundData,
      qty: foundData.qty + qty,
    };
    dispatch(incrementCartItem(payload));
  };
  const handleDecrement = (id) => {
    const foundData = dataCart.find((item) => item.id === id);
    const payload = {
      userId,
      ...foundData,
      qty: foundData.qty - 1,
    };
    dispatch(decrementCartItem(payload));
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    dataCart.forEach((item) => {
      totalPrice += item.price * item.qty;
    });
    return totalPrice.toFixed(2); // Mengembalikan total harga dengan 2 digit desimal
  };

  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data: products } = useSWR(
    `http://localhost:3000/664/products`,
    getProducts
  );
  const handlerAddToCart = (item) => {
    const foundData = items.find((data) => data.id === item.id);
    console.log(items[0].userId)
    if (foundData ) {
      const payload = {
        userId,
        ...foundData,
        qty: foundData.qty + qty,
      };
      dispatch(incrementCartItem(payload));
    } else {
      const payload = {
        userId,
        items:[{
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          qty,
        }]
      };
      dispatch(addToCart(payload));
    }
  };
 
  return (
    <div className="text-center ">
      <Header2 />
      <Link to={"/"}>
        <h1 className="section-title m-5">Cart Page</h1>
      </Link>
      <div className="grid grid-cols-7 text-xl gap-10 items-center th-style mx-10">
        <div></div>
        <div></div>
        <div>Product</div> <div>Price</div> <div>Quantity</div>{" "}
        <div>Total Price</div>
        <div></div>
      </div>
      <div>
        {items?.length === 0 && <p>No Data in Cart</p>}
        { items?.userId !== userId && (
          <div className="mx-5 px-5 ">
            {items?.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-7 text-xl gap-10 items-center  border-b border-gray-500 rounded-lg"
              >
                <div>{item.userId}</div>
                <div className="flex justify-center">
                  <img src={item.image} className="w-24 my-3 rounded-md" />
                </div>
                <div className="">{item.name}</div>
                <div>{toRupiah(item.price)} </div>
                <div className="flex gap-4 items-center">
                  <button
                    className="bg-slate-200 py-2 px-4 rounded-lg"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <div className="">{item.qty}</div>
                  <button
                    className="bg-slate-200 py-2 px-4 rounded-lg"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div>{toRupiah(item.price * item.qty)}</div>
                <div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-3 bg-red-600 text-white  hover:bg-red-700 regular-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-xl border-2 font-serif font-semibold text-end m-10">
          Total Price: {toRupiah(getTotalPrice())}
        </div>
      </div>
      <div className="flex justify-center">
            {products?.map((item) => (
              <div className="m-3 p-2 bg-slate-400">
                <img src={item.image} className="w-32" />
                <h1>{item.name}</h1>
                <button
                  className="bg-slate-200"
                  onClick={() => handlerAddToCart(item)}
                > Add To Cart </button>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Cartpage;
