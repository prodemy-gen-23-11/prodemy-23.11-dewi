import React, { useState } from "react";

import FormStyle from "../component/form/FormStyle";
import Input from "../component/Input";
import Label from "../component/Label";

export default function AddNewProduct() {
  const [form, setForm] = useState({
    name: "",
    category_id: "",
  });
  function NewProduct(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function Add(event) {
    event.preventDefault();
    reset();
    console.log(form);
  }

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <FormStyle>
        <FormStyle.Title>Add New Product</FormStyle.Title>
        <form onSubmit={Add}>
          <FormStyle.Body>
            <div className="mx-12 rounded-md p-2 border-2 border-gray-300 bg-white w-[400px]">
              <div>
                <p>Name : {form.name}</p>
              </div>
              <div>
                <p>Category_ID : {form.category_id}</p>
              </div>
            </div>
          </FormStyle.Body>
          <div className="md:grid grid-cols-2">
            <FormStyle.Body>
              <Label htmlFor="name" value={"Name Product:"} />
              <Input
                id={"name"}
                name={"name"}
                placeholder="name"
                value={form.name}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="category_id" value={"Category ID:"} />
              <Input
                type="number"
                id={"category_id"}
                name={"category_id"}
                placeholder="category_id"
                value={form.category_id}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="detail" value={" detail:"} />
              <Input
                id={"detail"}
                name={"detail"}
                placeholder="detail"
                value={form.detail}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="material" value={" material:"} />
              <Input
                id={"material"}
                name={"material"}
                placeholder="material"
                value={form.material}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="price" value={" price:"} />
              <Input
                id={"price"}
                name={"price"}
                placeholder="price"
                value={form.price}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="variants" value={" variants:"} />
              <Input
                id={"variants"}
                name={"variants"}
                placeholder="variants"
                value={form.variants}
                onChange={NewProduct}
              />
            </FormStyle.Body>
            <FormStyle.Body>
            <Label htmlFor="image" value={" image:"} />
              <Input
                id={"image"}
                name={"image"}
                placeholder="image url"
                value={form.image}
                onChange={NewProduct}
              />
            </FormStyle.Body>
          </div>

          <FormStyle.Footer>
            <button className="btn bg-blue-800 text-white">Submit</button>
          </FormStyle.Footer>
        </form>
      </FormStyle>
    </div>
  );
}
