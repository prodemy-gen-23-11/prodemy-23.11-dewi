import React from 'react';
function Navbar() {
   return (
      <div className="py-5 px-20 text-2xl font-semibold text-[#373434] flex justify-between tracking-wide uppercase ">
         <div className="max-md:hidden">
            <ul className="flex lg:gap-16">
               <li className="navbar">Home</li>
               <li className="navbar">About</li>
               <li className="navbar">Help</li>
            </ul>
         </div>

         <ul className="flex lg:gap-16 pr-10 ">
            <li className="group flex px-5">
               <i class="fa fa-search p-1 "></i>
               <span className="block group-hover:hidden hover:text-rose-800">
                  Search
               </span>
               <input
                  className="hidden rounded-lg group-hover:block px-5 py-1 "
                  placeholder="Search"
                  type="text"
               />
            </li>
            <li className="group px-5 relative ">
               <span className="navbar flex">
                  <i class="fa fa-user p-1 "></i>Account
               </span>{' '}
               <div className="text-md capitalize text-end rounded-md overflow-hidden hidden absolute w-40 bg-slate-50 group-hover:block">
                  <ul>
                     <li className="p-3 border-b hover:font-bold hover:text-center">
                        <a href="">Login</a>
                     </li>
                     <li className="p-3 hover:font-bold hover:text-center">
                        <a href="">Register</a>
                     </li>
                  </ul>
               </div>
            </li>
            <li className="navbar flex">
               <i class="fa fa-solid fa-cart-shopping py-1"></i>
               <span>Cart</span>
            </li>
         </ul>
      </div>
   );
}
export default Navbar;
