
export default function TextInput({register, label, name, id }) {
  return (
    <div>
      <label htmlFor={id} className="label-style">
                {label}
              </label>
              <input
                className="form-style"
                {...register({name})}
                id={id}
              />
    </div>
  )
}
