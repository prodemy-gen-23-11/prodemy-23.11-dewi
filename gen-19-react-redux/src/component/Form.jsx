import React from "react";
import FormStyle from "./form/FormStyle";
import TextInput from "./form/TextInput";
import VarianInput from "./form/VarianInput";
import CategoryInput from "./form/CategoryInput";
import ImageByFile from "./form/ImageByFile";
import ImageByUrl from "./form/ImageByUrl";
import PreviewByUrl from "./form/PreviewByUrl";

export default function Form({
     handleSubmit,
     register,
     onSubmitForm,
     errors,
     setValue,
     isImage, setIsImage, isPreview, setIsPreview,
     title
})
 {
  return (
    <div>
      <FormStyle>
          <FormStyle.Title>{title}</FormStyle.Title>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="grid grid-cols-2">
              <FormStyle.Body>
              <TextInput placeholder="Product name..." name="name" id="name" label="Name" register={register}  />
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
              <label htmlFor="detail" className="label-style">
                Detail Product
              </label>
              <textarea
                placeholder="product detail"
                className="form-style"
                {...register("detail")}
                id="detail"
              />
              <p className="error">{errors.detail?.message}</p>
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
                    setIsPreview(!isPreview) ;
                    setValue("preview","")
                  }}
                />{" "}
                <p>by File</p>
              </div>
              {isPreview  &&
                (
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
  );
}
