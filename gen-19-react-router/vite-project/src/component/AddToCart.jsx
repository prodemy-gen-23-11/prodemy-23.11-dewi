import React from 'react';
import Button from './Button';

function AddToCart() {
   return (
      <div className="w-full h-full absolute inset-0 opacity-0 duration-300 bg-rose-200 hover:opacity-70 hover:duration-300">
         <div className="mt-48">
            <Button>Add To Cart</Button>
         </div>
      </div>
   );
}
export default AddToCart;
