import ProductCard from '../component/ProductCard';
import jacket from '../assets/Jacket';
import headline_product from '../assets/HL-Produk';
import parfum from '../assets/Parfum';
import Section from '../component/SectionTitle';
import AddToCart from '../component/AddToCart';
import CategoryCard from '../component/CategoryCard';
import {category} from '../assets/Category';
import Headline from '../component/Headline';

function ProductPage() {
   return (
      <div>
         <div>
            {headline_product.map((item) => {
               return <Headline data={item} key={item.src} />;
            })}
         </div>

         <div className="m-5 flex justify-center uppercase">
            {category.map((item) => (
               <CategoryCard >{item.name}</CategoryCard>
            )
            )}
         </div>

         <div className="bg-gradient-to-b from-rose-100 to-white mx-20 rounded-xl">
            <Section>Parfume</Section>
            <div className="flex justify-center gap-8">
               {parfum.map((item) => {
                  return (
                     <div className="w-[280px]">
                        <ProductCard>
                           <ProductCard.Image
                              imgProduk={item.image}
                              key={item.src}
                           />
                           <ProductCard.Title
                              titleProduk={item.name}
                              key={item.src}
                           />
                           <ProductCard.Body
                              priceProduk={item.price}
                              key={item.src}
                           />
                           <AddToCart />
                        </ProductCard>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className="bg-gradient-to-tl from-rose-100 to-white mx-20 rounded-xl">
            <Section>coat & jacket</Section>
            <div className=" flex justify-center">
               <div className=" ">
                  {jacket.map((item) => {
                     return (
                        <div className="w-[280px] hover:card">
                           <ProductCard>
                              <ProductCard.Image
                                 imgProduk={item.image}
                                 key={item.src}
                              />
                              <ProductCard.Title
                                 titleProduk={item.name}
                                 key={item.src}
                              />
                              <ProductCard.Body
                                 priceProduk={item.price}
                                 key={item.src}
                              />
                              <AddToCart />
                           </ProductCard>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
export default ProductPage;
