import React from 'react';
function Navbar() {
   return (
      <div className="py-5 px-20 text-2xl font-semibold text-[#373434] flex justify-between tracking-wide uppercase ">
         <div className="max-md:hidden">
            <ul className="flex lg:gap-16 md:">
               <li className="px-5 hover:text-rose-800 hover:scale-105">Home</li>
               <li className="px-5 hover:text-rose-800 hover:scale-105">About</li>
               <li className="px-5 hover:text-rose-800 hover:scale-105">Help</li>
            </ul>
         </div>

         <ul className="flex lg:gap-16">
            <li className="group px-5">
               <span className="block group-hover:hidden hover:text-rose-800">Search</span>
               <input
                  className="hidden rounded-lg group-hover:block px-5 py-1 "
                  placeholder="Search"
                  type="text"
               />
            </li>
            <li className="group px-5 relative ">
               <span className='hover:text-rose-800 hover:scale-105'>Account</span>{' '}
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
            <li className="px-5 hover:text-rose-800 hover:scale-105">
               <span>Cart</span>
            </li>
         </ul>
      </div>
   );
}
export default Navbar;
