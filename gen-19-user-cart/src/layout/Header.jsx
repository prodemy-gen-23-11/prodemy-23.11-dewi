import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthData } from "../redux/reducer/authSlice";
import useSWR from "swr";
import axios from "axios";
import { fetchData } from "../redux/reducer/cartSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  
  function handlerClickLogout() {
    dispatch(resetAuthData());
    navigate("/");
  }
  useEffect(() => {
    dispatch(fetchData(user.id)); // Ambil data keranjang saat komponen dimuat
  }, [dispatch]);
  const item = useSelector(state => state.cart.items);
  const getTotalItems = () => {
    let total = 0;
    item.forEach(item => {
      total += item.qty;
    });
    return total;
  };
  return (
    <div>
      <div>
        <h1 className="header text-center active:text-gray-700">
          <Link to={"/"}>Just Store</Link>
        </h1>
      </div>
      <div className="py-5 px-20 text-2xl font-semibold text-[#373434] flex justify-between tracking-wide uppercase ">
        <div className="max-md:hidden">
          <ul className="flex lg:gap-16">
            <li className="navbar">
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navbar">
              <Link to={"/admin"}>Admin</Link>
            </li>
            <li className="navbar">Help</li>
          </ul>
        </div>
{/* Account */}
        <ul className="flex lg:mx-16">
          <div>
            {isLoggedIn ? (
              <div
                className="self-center cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Hi, {user.firstname}
                {showDropdown && (
                  <div
                    className="rounded-md drop-shadow-md absolute bg-sky-50 p-3 active:text-blue-600"
                    onClick={handlerClickLogout}
                  >
                    Logout
                  </div>
                )}
              </div>
            ) : (
              //  sebelum login
              <div
                className="self-center cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="navbar flex">
                  <i class="fa fa-user py-1 p-2 "></i>Account
                </span>
                {showDropdown && (
                  <Link to={"/login"}>
                    <div className="rounded-md w-40 text-center drop-shadow-md hover: text-bold bg-sky-50 p-3 active:text-blue-600">
                      Login
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className=" text-3xl p-5 font-serif font-semibold drop-shadow-lg text-[#373434]"></div>
          <Link to={"/cart"}>
            <li className="navbar flex relative">
              <i class="fa fa-solid fa-cart-shopping py-1 px-2"></i>
              <span>Cart </span>
              <span className="py-0 px-2 absolute top-[-12px] right-[-10px] bg-red-500 text-white rounded-full text-base">
              {isLoggedIn && getTotalItems()}
              </span>
            </li>
          </Link>
          <li className="group flex px-5">
            <i class="fa fa-search py-1 px-2"></i>
            <span className="block group-hover:hidden hover:text-rose-800">
              Search
            </span>
            <input
              className="hidden rounded-lg group-hover:block px-3 py-1 "
              placeholder="Search"
              type="text"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
