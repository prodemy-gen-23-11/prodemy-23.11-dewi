import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is required"),
  price: Yup.number().required("Price is required"),
  images: Yup.string().required("At least one image is required"),
  descriptions: Yup.string().required("Description is required"),
});

export default function AddNewProduct({ register }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (data) => {
    const files = data.target.files;

    if (files) {
      const imagesArray = Array.from(files).map((file) => "/" + file.name);
      setSelectedImages(imagesArray);
    }
  };

  return (
    <div className="bg-gray-100 p-5 m-5 rounded">
      <label htmlFor="images">
        <span className="text-gray-700">Images:</span>
      </label>
      <div>
        <div>
          {selectedImages.map((image, index) => (
            <div key={index}>{image}</div>
          ))}
        </div>
        <input
          type="file"
          accept="image/*"
          id="images"
          className="mt-1 p-2 block bg-amber-200 w-full border rounded-md focus:outline-none focus:border-amber-400"
          {...register("images")}
          multiple
          onChange={handleImageChange}
        />
      </div>

      {/* {errors.images && (
        <p className="text-xs text-red-500">{errors.images.message}</p>  )}*/}
     
    </div>
  );
}
