import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from '../component/Form'
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";


export default function AddProductpage() {
     const navigate = useNavigate()
     const [isImage, setIsImage] = useState(false);
     const [isPreview, setIsPreview] = useState(false);

     const schema = yup.object().shape({
          name: yup.string().required("is required"),
          price: yup.number().required(" is required"),
          detail: yup.string().required("is required"),
          category: yup.string().oneOf(["1", "2", "3"]).required("select category"),
          image:isImage 
          ? yup.string().required(" is required") 
          : yup.mixed().test("required", "please select an image", (value) => {
            return value && value.length;
          })
        }); 

        const getProducts = (url) => axios.get(url).then((response) => response.data);
        const { mutate } = useSWR(
          `http://localhost:3000/products`,
          getProducts
        );

     const {
          register,
          handleSubmit,
          setValue,
          formState: { errors },
          reset,
        } = useForm({ resolver: yupResolver(schema) });
      
        const onSubmitForm = (data) => {
          const AddProduct = {
            name: data.name,
            category_id: data.category,
            price: data.price,
            material: data.material,
            detail: data.detail,
            variants: data.variants,
            image: data.image,
            preview: data.preview,
          };
          console.log("AddProduct")
          axios
            .post("http://localhost:3000/products", AddProduct)
            .then(() => {
              navigate(-1);
              mutate()
            })
            .catch((error) => console.log(error));
          
     };
  return (
    <div> 
      <Form title="Add New Product"
      handleSubmit={handleSubmit}
              register={register}
              onSubmitForm={onSubmitForm}
              errors={errors} setValue={setValue} isImage={isImage} setIsImage={setIsImage} isPreview={isPreview} setIsPreview={setIsPreview}/>
    </div>
  )
}
