import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import CategoryInput from '../component/form/CategoryInput';
import FormStyle from '../component/form/FormStyle';

export default function FormProduct() {
        const schema = yup.object().shape({
          name: yup.string().required("is required"),
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
          console.log(data);
          reset();
        };

  return (
    <div>
     <FormStyle>
          <FormStyle.Title>Add New Product</FormStyle.Title>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
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
          <CategoryInput register={register}/>
          <p className="error">{errors.category?.message}</p>
          </FormStyle.Body>
          <FormStyle.Footer>
          <button className="btn " type="submit">
                Add
              </button>
          </FormStyle.Footer>
          </form>
         
     </FormStyle>
      
    </div>
  )
}
