

export default function CategoryInput({register}) {
    
  return (
    <div>
       <label htmlFor="category" className="label-style">
                category
              </label>
              <select
                placeholder="category"
                className="form-style"
                {...register("category")}
                name='category'
                id="category"
                
              >
                <option value="">Please select</option>
                <option value="1">1. Parfume</option>
                <option value="2">2. Coat & Jacket</option>
                <option value="2">3. T-Shirt</option>
              </select>
    </div>
  )
}
