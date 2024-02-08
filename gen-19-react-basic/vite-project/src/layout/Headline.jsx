import React from 'react';
import Button from '../component/Button';

function Headline({data}) {
   return (
      <div className="h-72 bg-red-50 shadow-md flex justify-center items-center tracking-widest duration-500 hover:shadow-rose-300 hover:scale-105 hover:duration-500">
         <div className='text-center'>
          <h1 className="text-5xl uppercase text-red-600 font-extrabold p-2">{data.tagline}</h1>
          <h2 className='text-3xl uppercase text-center font-semibold mb-5'>{data.description}</h2>
          <Button className="">Explore Now</Button>
         </div>
         <div className="p-2">
          <img src={data.image} alt=""  className="h-60"/>
         </div>
      </div>
   );
}
export default Headline;
