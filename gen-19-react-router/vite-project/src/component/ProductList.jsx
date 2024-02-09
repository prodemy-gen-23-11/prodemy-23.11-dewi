import React from 'react'
import ProductCard from './ProductCard';
import AddToCart from './AddToCart';
import jacket from '../assets/Jacket';

export default function ProductList() {
  return (
    <div>
      <div className="flex justify-center">
               <div className="flex justify-center">
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
  )
}
