import React from 'react';

function Button({children}) {
   return (
   <div>
     <button className='top-1/2 text-xl px-4 py-3 rounded-xl text-white  hover:shadow-md hover:scale-105'>{children}</button>
   </div>
   );
}
export default Button;
