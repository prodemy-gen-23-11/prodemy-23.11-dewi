import React from 'react'
import { useForm } from 'react-hook-form'

export default function VarianInput({register}) {

   // const selectAll =watch('selectAll')
  return (
    <div>

              <label htmlFor="variants" className="label-style">
                Variants
              </label>
              <div></div>
              <div className="grid grid-cols-4 text-lg text-gray-800 ">
                {/* <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mx-2"
                    {...register("selectAll")}
                  />{" "}
                  <p>Select All</p>
                </div> */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    //checked={selectAll}
                    value="XXS"
                    {...register("variants")}
                    id="variants"
                  />{" "}
                  <p>XXS</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    value="XS"
                    {...register("variants")}
                    id="variants"
                  />{" "}
                  <p>XS</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    value="S"
                    {...register("variants")}
                    id="variants"
                  />{" "}
                  <p>S</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    value="M"
                    {...register("variants")}
                    id="variants"
                  />{" "}
                  <p>M</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    value="L"
                    {...register("variants")}
                    id="variants"
                  />{" "}
                  <p>L</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    {...register("variants")}
                    value="XL"
                  />{" "}
                  <p>XL</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    {...register("variants")}
                    value="2XL"
                  />{" "}
                  <p>2XL</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 ml-4"
                    {...register("variants")}
                    value="3XL"
                  />{" "}
                  <p>3XL</p>
                </div>
              </div>
            
    </div>
  )
}
