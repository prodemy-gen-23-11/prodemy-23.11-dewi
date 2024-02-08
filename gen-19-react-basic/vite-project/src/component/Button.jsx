import React from 'react';

function Button({children}) {
   return (
   <div>
     <button className='top-1/2 text-xl px-4 py-2 rounded-xl text-white bg-rose-800 hover:bg-rose-600 hover:shadow-md hover:scale-105'>{children}</button>
   </div>
   );
}
export default Button;
