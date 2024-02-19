import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormStyle from "../component/form/FormStyle";
import VarianInput from "../component/form/VarianInput";
import CategoryInput from "../component/form/CategoryInput";
import ImageByUrl from "../component/form/ImageByUrl";
import ImageByFile from "../component/form/ImageByFile";
import PreviewByUrl from "../component/form/PreviewByUrl";
import PreviewByFile from "../component/form/PreviewByFile";

export default function FormAddNew() {
  const [isImage, setIsImage] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("is required"),
    price: yup.number().required(" is required"),
    description: yup.string().required("is required"),
    category: yup.string().oneOf(["1", "2", "3"]).required("select category"),
    image: yup.string().required(" is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    console.log(data.image);
    // reset();
  };

  return (
    <div className="bg-[url('https://wallpapers.com/images/featured/e7l0r9mzdruea4w5.jpg')] bg-no-repeat ">
      <div className=" min-h-screen flex items-center justify-center ">
        <FormStyle>
          <FormStyle.Title>Add New</FormStyle.Title>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="grid grid-cols-2">
              <FormStyle.Body>
                <label htmlFor="name" className="label-style">
                  Name
                </label>
                <input
                  placeholder="product name.."
                  className="form-style"
                  {...register("name")}
                  id="name"
                />
                <p className="error">{errors.name?.message}</p>
              </FormStyle.Body>

              <FormStyle.Body>
                <CategoryInput register={register} />
                <p className="error">{errors.category?.message}</p>
              </FormStyle.Body>
            </div>
            <FormStyle.Body>
              <label htmlFor="price" className="label-style">
                Price
              </label>
              <input
                type="number"
                placeholder="product price..."
                className="form-style"
                {...register("price")}
                id="price"
              />
              <p className="error">{errors.price?.message}</p>
            </FormStyle.Body>

            <div className="grid grid-cols-2">
              <FormStyle.Body>
                <label htmlFor="material" className="label-style">
                  Material
                </label>
                <input
                  placeholder="material product..."
                  className="form-style"
                  {...register("material")}
                  id="material"
                />
                {/* <TextInput label='Material' name='material' id='material' register={register}  /> */}
              </FormStyle.Body>

              <FormStyle.Body>
                <VarianInput register={register} />
              </FormStyle.Body>
            </div>

            <FormStyle.Body>
              <label htmlFor="description" className="label-style">
                Description
              </label>
              <textarea
                placeholder="product description"
                className="form-style"
                {...register("description")}
                id="description"
              />
              <p className="error">{errors.description?.message}</p>
            </FormStyle.Body>

            <FormStyle.Body>
              <div className="flex items-center">
                <label htmlFor="image" className="label-style">
                  Image
                </label>
                <input
                  type="checkbox"
                  className="rounded-xl mx-2"
                  onClick={() => setIsImage(!isImage)}
                />
                <p>by URL</p>
              </div>
              {isImage ? (
                <ImageByUrl register={register} />
              ) : (
                <ImageByFile register={register} />
              )}
              <p className="error">{errors.image?.message}</p>
            </FormStyle.Body>

            <FormStyle.Body>
              <div className="flex items-center">
                <label htmlFor="preview" className="label-style">
                  Preview Image
                </label>
                <input
                  type="checkbox"
                  className="rounded-xl mx-2"
                  onClick={() => setIsPreview(!isPreview)}
                />{" "}
                <p>by URL</p>
              </div>
              {isPreview ? (
                <PreviewByUrl
                  register={register}
                  placeholder="preview url..."
                />
              ) : (
                <PreviewByFile register={register} />
              )}
            </FormStyle.Body>

            <FormStyle.Footer>
              <button className="btn " type="submit">
                Add
              </button>
            </FormStyle.Footer>
          </form>
        </FormStyle>
      </div>
    </div>
  );
}
