import { useState } from 'react';
//import jacket from '../assets/Jacket';

function ProductVariant(props) {
   //const variants = ['S', 'M', 'L']
   const {variants}=props
   const [variant, setVariant] = useState(variants[0]);
   
   function changeVariant(size) {
      setVariant(size);
      console.log(size);
   }
  //co nsole.log(variant)
   return (
      <div>
          <div className='text-base uppercase font-bold'>
            <h1>Size: </h1>
            {variants.map((size,index) => (
               <button 
               className={
                    size === variant
                        ? "btn-size-selected"
                        : "btn-size-option"
                }
                key={index}
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
