import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {  useNavigate } from "react-router-dom";
import Table from "../component/Table";

export default function Adminpage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data: products, mutate } = useSWR(
    `http://localhost:3000/products`,
    getProducts
  );

  const onClickAdd = () => {
    navigate(`add`);
  };

  const onClickEdit = (id) => {
    navigate(`updateProducts/${id}`
    );
  };

  const onClickDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => mutate());
  };


  return (
    <div>
      <h1 className="text-c enter m-5 text-3xl uppercase font-serif">
        Admin page
      </h1>
      <div className="p-2 flex justify-center">
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search Product ..."
          className="py-3 text-xl font-serif border border-1  w-full text-center"
        />
      </div>
      <div className="flex justify-center mr-20 ">

          <button className="btn" onClick={onClickAdd}>Add New Product</button>
       
      </div>
      <div className="m-5 flex justify-center">
        <Table products={products} search={search} onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
      </div>
    </div>
  );
}
