import ProductView from "../component/ProductView";
import QuantityProduct from "../component/QuantityProduct";
import ProductVariant from "../component/ProductVariant";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import Button from "../component/Button";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, removeOne } from "../redux/action/action";


function ProductDetail() {
  
  const { id } = useParams();
  //const { cart } = useSelector(state => state.cartReducer)
  const dispatch =useDispatch();

  const [ qty, setQty] =useState(1);
  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) 
      setQty(qty - 1);
    
  };
  // function addToCart(){
  //   const productExist = items.find((item)=>item.id === id);
  //   if (productExist){
  //     setItems(items.map((item)=>item.id===id ? {...item, qty: item.qty + qty} : item))
  //   }
  //   else{
  //     setItems([...items, {...products, qty: qty}])
  //   }
  // }


  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data: products, isLoading } = useSWR(
    `http://localhost:3000/products/${id}`,
    getProducts
  );
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <div className="m-0 h-[770px]">
        <div className="flex justify-between  bg-blue-300 md:h-[550px]">
          <div className="w-1/2 m-5">
            <ProductView image={products?.image} preview={products?.preview} />
          </div>
          <div className="w-1/2 m-5 pt-5">

            <div className="text-3xl md:text-4xl font-bold py-2">
              <h2 className="">{products?.price}</h2>
            </div>

            <h1 className="text-2xl md:text-4xl font-serif font-bold py-3">
              {products?.name}
            </h1>

            <h3 className="title-artikel font-mono">{products?.detail}</h3>

            <ul className="flex artikel">
              <li>
                <i className="fa fa-star checked text-yellow-400"></i>
              </li>
              <li>
                <i className="fa fa-star checked text-yellow-400"></i>
              </li>
              <li>
                <i className="fa fa-star checked text-yellow-400"></i>
              </li>
              <li>
                <i className="fa fa-star checked text-yellow-400"></i>
              </li>
              <li>
                <i className="fa fa-star checked text-yellow-400"></i>
              </li>
              <li className="mx-3 text-black">32 Ratings</li>
            </ul>

            <div className="my-5">
              <ProductVariant variants={products?.variants} />
            </div>
            <div>
            <div className="p-1  flex justify-center w-[150px] rounded-md ">
            <h3 className='text-xl py-2  px-4 font-bold'>Total</h3>
            <button
               className="btn-plus-min"
               onClick={() => dispatch(removeOne({qty}))}
            >  -  </button>
            <p className="text-xl py-2  px-4 font-bold"> {qty} </p>
            <button
               className="btn-plus-min"
               onClick={incrementQty}
            > + </button>
         </div>
            </div>
            <div className="flex justify-start gap-8 py-5">
            <div className="bg-blue-500 hover:bg-blue-600 w-40 text-center rounded-lg" onClick={() => dispatch(addToCart(products))}>
               <Button>Add To Cart</Button>
            </div>
            <div className="bg-green-500 hover:bg-green-600  w-40 text-center rounded-lg">
               <Button>Check Out </Button>
            </div>
            </div>
           
            
          </div>
        </div>
      </div>
      <div className="font-serif px-6 m-5 h-[300px] overflow-y-scroll">
        <h1 className="title-artikel">Product Details:</h1>
        <p className="artikel capitalize">Material: {products?.material}</p>
        <div className="artikel capitalize ">
          <p className="p-3">
            I created the size and the fancy design you are looking for in
            women's clothing. The oversized denim jacket lovers out there; this
            black and white printed XXL jean jacket is a candidate to be an
            indispensable plus size clothing in your wardrobe. The bun hair girl
            is printed in black and white colors, on a soft fabric and sewn on
            the back of this jean coat.
          </p>
          <p className="p-3">
            Here is a special listing for the ones addicted to jean jackets and
            who are never able to find the appropriate size for themselves. This
            listing is specialized for 2XL but please ask for bigger coats. I
            will be happy to design for a big size, so glad you to choose from
            my store and respond to your needs as necessary.
          </p>
          <p className="p-3">
            Spot cleaning or cold wash placing it in a laundry bag inside out
            and hanging dry afterwards recommended.
          </p>
        </div>
      </div>
      <div className="p-4 m-0 border bottom-1 border-black">
        <h1 className="section-title">Recomendation Product</h1>
      </div>
    </div>
  );
}
export default ProductDetail;
