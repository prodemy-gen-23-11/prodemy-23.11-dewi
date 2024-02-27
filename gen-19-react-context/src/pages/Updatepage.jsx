import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from '../component/Form'
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";


export default function Updatepage() {
  const navigate = useNavigate();
     const {id} =useParams();
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
        } = useForm({ resolver: yupResolver(schema), defaultValues :dataAwal()});
        
        function dataAwal (){
          axios.get(`http://localhost:3000/products/${id}`).then((res)=>{
            setValue("name", res.data.name);
            setValue("category", res.data.category_id);
            setValue("price", res.data.price);
            setValue("variants", res.data.variants);
            setValue("material", res.data.material);
            setValue("detail", res.data.detail);
            setValue("image", res.data.image);
            setValue("preview", res.data.preview);
           }) 
        }
       
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
            .put(`http://localhost:3000/products/${id}`, AddProduct)
            .then(() => {
              mutate()
              navigate(-1);
            })
            .catch((error) => console.log(error));
          
     };
  return (
    <div> 
      <Form title="Edit Product"
      handleSubmit={handleSubmit}
              register={register}
              onSubmitForm={onSubmitForm}
              errors={errors} setValue={setValue} isImage={isImage} setIsImage={setIsImage} isPreview={isPreview} setIsPreview={setIsPreview}/>
    </div>
  )
}
