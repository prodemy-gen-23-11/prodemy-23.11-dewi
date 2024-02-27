import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  CartContext  from '../context/Cartcontext';

function Header() {
 const {items} = useContext(CartContext)
 //console.log(items)
   return (
      <div>
         <div>
            <h1 className="header text-center hover:scale-105 hover:duration-300">
               <Link to={"/"}>Just Store
               </Link>
            </h1>
         </div>
         <div className="py-5 px-20 text-2xl font-semibold text-[#373434] flex justify-between tracking-wide uppercase ">
         <div className="max-md:hidden">
            <ul className="flex lg:gap-16">
               <li className="navbar"> <Link to={"/"}>Home</Link></li>
               <li className="navbar"><Link to={"/admin"}>Admin</Link></li>
               <li className="navbar">Help</li>
            </ul>
         </div>

         <ul className="flex lg:gap-16 pr-10 ">
            
            <li className="group px-5 relative ">
               <span className="navbar flex">
                  <i class="fa fa-user py-1 px-2 "></i>Account
               </span>{' '}
               <div className="text-md capitalize text-end rounded-md overflow-hidden hidden absolute w-40 bg-slate-50 group-hover:block">
                  <ul>

                     <Link to={"/login"}><li className="p-3 border-b hover:font-bold hover:text-center">
                        <a href="">Login</a>
                     </li>
                     </Link>
                     
                     <li className="p-3 hover:font-bold hover:text-center">
                        <a href="">Register</a>
                     </li>
                  </ul>
               </div>
            </li>
           
               <Link to={"/cart"}>
               <li className="navbar flex relative">
               <i class="fa fa-solid fa-cart-shopping py-1 px-2"></i>
               <span>Cart </span>
               <span className='py-0 px-2 absolute top-[-12px] right-[-10px] bg-red-500 text-white rounded-full text-base' >{items?.length}</span>
            </li>
               </Link>
            <li className="group flex px-5">
               <i class="fa fa-search py-1 px-2"></i>
               <span className="block group-hover:hidden hover:text-rose-800">
                  Search
               </span>
               <input
                  className="hidden rounded-lg group-hover:block px-5 py-1 "
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
