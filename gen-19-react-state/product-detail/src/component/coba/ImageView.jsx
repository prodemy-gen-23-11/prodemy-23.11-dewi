import { useState } from 'react';


function ProductDetail(props) {
   const {image} =props
   
   const [mainImage, setMainImage] = useState(image);

   function changeMainImage(view) {
      setMainImage(view);
   }
   return (
      <>
         <div className="flex justify-center m-4">
            <img src={mainImage} alt="Preview-Product" className="w-[420px]" />
         </div>
         <div className="flex justify-center gap-4">
            {image.map((view) => (
               <div className='img-view-option'>
                  <div className={view === mainImage ? 'img-view-select' : ''}>
                     <img
                        src={view}
                        alt=""
                        className="w-32"
                        onClick={() => {
                           changeMainImage(view);
                        }}
                     />
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}
export default ProductDetail;
