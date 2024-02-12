import React from "react";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className="flex justify-between   m-4 mb-0">
      <div>
        <h1 className="header mx-5 pr-10">
          <Link to={"/"}>Just Store</Link>
        </h1>
      </div>
      <div className=" text-2xl font-semibold text-[#373434] tracking-wide uppercase">
        <ul className="flex gap-10 pr-10 items-center">
        <li className="navbar py-2">About</li>
               <li className="navbar py-2">Help</li>
          <li className="navbar py-2">
            <i class="fa fa-solid fa-cart-shopping p-2"></i>{" "}
            <a href="">
              <span>Cart</span>
            </a>
          </li>

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
