
export default function TextInput({ name, label, type = "text", register, id , placeholder}, value) {
  return (
    <div>
    <label
                htmlFor={name}
                className='label-style'
            >
                {label}
            </label>
            <div>
                <input
                    {...register(name)}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    type={type}
                    className='form-style'
                />
            </div>
    </div>
  )
}
