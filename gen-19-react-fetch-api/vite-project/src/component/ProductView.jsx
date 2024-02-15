import { useEffect, useState } from 'react';

function ProductDetail(props) {
   const {image, preview, id} = props;

   const [mainImage, setMainImage] = useState(image);

   useEffect(() => {
      window.scrollTo(0, 0);
     setMainImage(image);
   }, [id]);

   function changeMainImage(view) {
      setMainImage(view);
   }
   return (
      <>
         <div className="flex justify-center m-4">
            <img src={mainImage} alt="Preview-Product" className="w-[420px]" />
         </div>
         <div className="flex justify-center gap-4">
            {preview?.map((view,index) => (
               <div className='img-view-option'>
                  <div className={view === mainImage ? 'img-view-select' : ''}>
                     <img
                        src={view}
                        alt=""
                        className="w-32"
                        key={index}
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
