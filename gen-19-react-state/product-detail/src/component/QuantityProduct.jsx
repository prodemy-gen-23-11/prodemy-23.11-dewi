import React, { useState } from 'react';

export default function QuantityProduct() {
   const [count, setCount] = useState(1);

   return (
      <div className="m-4">
   
         <div className="p-1  flex justify-center w-[150px] rounded-md ">
            <h3 className='text-xl py-2  px-4 font-bold'>Total</h3>
            <button
               className="btn-plus-min"
               onClick={() => setCount(count - 1)}
            >  -  </button>
            <p className="text-xl py-2  px-4 font-bold"> {count} </p>
            <button
               className="btn-plus-min"
               onClick={() => setCount(count + 1)}
            > + </button>
         </div>
      </div>
   );
}
