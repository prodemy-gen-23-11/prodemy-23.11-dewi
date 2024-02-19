import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormStyle from "../component/form/FormStyle";
import VarianInput from "../component/form/VarianInput";
import CategoryInput from "../component/form/CategoryInput";
import ImageByUrl from "../component/form/ImageByUrl";
import ImageByFile from "../component/form/ImageByFile";
import ImageFile from "../component/form/ImageFile";
import PreviewByUrl from "../component/form/PreviewByUrl";
import PreviewByFile from "../component/form/PreviewByFile";
import TextInput from "../component/form/TextInput";

export default function FormAddNew() {
  const [isImage, setIsImage] = useState(false);
  const [isPreview, setIsPreview] = useState(false);


  const schema = yup.object().shape({
    name: yup.string().required("is required"),
    price: yup.number().required(" is required"),
    description: yup.string().required("is required"),
    category: yup.string().oneOf(["1", "2", "3"]).required("select category"),
    image:isImage 
    ? yup.string().required(" is required") 
    : yup.mixed().test("required", "please select an image", (value) => {
      return value && value.length;
    })
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    console.log((data));
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
              <TextInput placeholder="Product name..." name="name" id="name" label="Name" register={register} />
                <p className="error">{errors.name?.message}</p>
              </FormStyle.Body>

              <FormStyle.Body>
                <CategoryInput register={register} />
                <p className="error">{errors.category?.message}</p>
              </FormStyle.Body>
            </div>
            <FormStyle.Body>
              <TextInput placeholder="Product price..." name="price" id="price" label="Price" register={register} type="number"/>
              <p className="error">{errors.price?.message}</p>
            </FormStyle.Body>

            <div className="grid grid-cols-2">
              <FormStyle.Body>
              <TextInput placeholder="Product material..." name="material" id="material" label="Material" register={register} />
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
                  onChange={() => {
                    setIsImage(!isImage) ;
                    setValue("image","")
                  }}
                />
                <p>by File</p>
              </div>
              {isImage ? (
                <ImageByFile register={register} />
              ) : (
                <ImageByUrl register={register} />
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
                  onChange={() => {
                    setIsImage(!isPreview) ;
                    setValue("preview","")
                  }}
                />{" "}
                <p>by File</p>
              </div>
              {isPreview ? (
                <PreviewByFile
                  register={register}
                  placeholder="preview url..."
                />
              ) : (
                <PreviewByUrl register={register} />
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
