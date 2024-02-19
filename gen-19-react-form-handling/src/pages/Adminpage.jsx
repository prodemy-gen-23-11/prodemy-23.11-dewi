import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Button from "../component/Button";
import { Link } from "react-router-dom";

export default function Adminpage() {
  const [search, setSearch] = useState("");

  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data: products } = useSWR(
    `http://localhost:3000/products`,
    getProducts
  );
  // useEffect(() => {
  //   getProducts();
  // }, []);

 
  return (
    <div>
      <h1 className="text-center m-5 text-3xl uppercase font-serif">Admin page</h1>
      <div className="p-2 flex justify-center">
        <input type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search Product ..." className="py-3 text-xl font-serif border border-1  w-full text-center"/>
      </div>
      <div className="flex justify-center mr-20 ">
      <Link to={"/form-add"}> <button className="btn  " >Add New Product</button></Link>
      </div>
      <div className="m-5 flex justify-center">
        <table>
          <thead>
            <tr>
            <th className="th-style">
                <p className="text-style">ID</p>
              </th>
              <th className="th-style">
                <p className="text-style">Image</p>
              </th>
              <th className="th-style">
                <p className="text-style">Name</p>
              </th>
              <th className="th-style">
                <p className="text-style">Price</p>
              </th>{" "}
              <th className="th-style">
                <p className="text-style">Material</p>
              </th>
              <th className="th-style">
                <p className="text-style">Category_ID</p>
              </th>
              <th className="th-style">
                <p className="text-style"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.filter(produk=> produk.name.toLowerCase().includes(search)).sort((a,b)=> a.id > b.id ? 1 : -1)
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td className="td-style uppercase ">
                    <p className="text-style ">{item.id}</p>
                  </td>
                  <td className="td-style  ">
                    <img src={item.image} className="w-14" />
                  </td>
                  <td className="td-style uppercase ">
                    <p className="text-style ">{item.name}</p>
                  </td>
                  <td className="td-style">
                    <p className="text-style ">{item.price}</p>
                  </td>
                  <td className="td-style capitalize">
                    <p className="text-style">{item.material}</p>
                  </td>
                  <td className="td-style capitalize text-center">
                    <p className="text-style">{item.category_id}</p>
                  </td>
                  <td className="td-style" >
                    <div className="flex justify-center gap-4">
                    <button className="btn bg-green-400 hover:bg-green-500 ">Edit</button> <button className="btn bg-red-400 hover:bg-red-500 ">Delete</button>
                    </div>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
      
     
    </div>
  );
}
