import { useState } from 'react';
import jacket from '../assets/Jacket';

function ProductVariant() {
   const product = jacket[0];

   const [variant, setVariant] = useState(product.variants[0]);
   function changeVariant(size) {
      setVariant(size);
   }
  
   return (
      <div>
         <div className='text-base uppercase font-bold'>
            <h1>Size: </h1>
            {product.variants.map((size) => (
               <button 
               className={
                    size === variant
                        ? "btn-size-selected"
                        : "btn-size-option"
                }
                  onClick={() => {
                     changeVariant(size);
                  }}
               >
                  {size}
               </button>
            ))}
         </div>
      </div>
   );
}
export default ProductVariant;
