
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSWR from "swr";


export default function Header2() {
  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data: carts } = useSWR(
    `http://localhost:3000/664/carts`,
    getProducts
  );
  const item = useSelector(state => state.cart.items);
  const getTotalItems = () => {
    let total = 0;
    item.forEach(item => {
      total += item.qty;
    });
    return total;
  };
//const cart = useSelector(state => state.cart.cart)

  return (
    <div className="flex justify-between m-4 mb-0">
      <div>
        <h1 className="header mx-5 pr-10">
          <Link to={"/"}>Just Store</Link>
        </h1>
      </div>
      <div className=" text-2xl font-semibold text-[#373434] tracking-wide uppercase">
        <ul className="flex gap-10 pr-10 items-center">
        <li className="navbar py-2">About</li>
               <li className="navbar py-2">Help</li>
               <Link to={"/cart"}>
               <li className="navbar flex relative">
               <i class="fa fa-solid fa-cart-shopping py-1 px-2"></i>
               <span>Cart</span>
               <span className='py-0 px-2 absolute top-[-12px] right-[-10px] bg-red-500 text-white rounded-full text-base' > {getTotalItems()}</span>
            </li>
               </Link>

          <li className="group flex py-2">
            <i class="fa fa-search p-2 "></i>
            <input
              className="rounded-lg block px-5 py-2 "
              placeholder="Search"
              type="text"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
