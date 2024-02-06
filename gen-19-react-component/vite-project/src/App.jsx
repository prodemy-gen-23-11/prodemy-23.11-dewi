import ProductCard from './component/ProductCard';
import jacket from './assets/Jacket';
import Navbar from './component/Navbar';

function App() {
   return (
      <> 
         <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="flex justify-center gap-8">
               {jacket.map((item) => {
                  return (
                     <div className="w-[280px] h-[320px] hover:card">
                        <ProductCard>
                           <ProductCard.Image imgProduk={item.image}key={item.src}/>
                           <ProductCard.Title titleProduk={item.name} key={item.src} />
                           <ProductCard.Body priceProduk={item.price} key={item.src}
                           />
                        </ProductCard>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
}

export default App;
