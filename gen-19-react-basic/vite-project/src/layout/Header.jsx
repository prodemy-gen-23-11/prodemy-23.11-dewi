import React from 'react';
import Navbar from './Navbar'
function Header({ children }) {
   return (
      <div>
         <div>
            <h1 className="text-center text-[40px] uppercase font-bold duration-300 drop-shadow-lg text-[#373434] tracking-widest hover:scale-105 hover:duration-300">
               <a href="">{children}</a>
            </h1>
         </div>
         <Navbar></Navbar>
      </div>
   );
}
export default Header;
