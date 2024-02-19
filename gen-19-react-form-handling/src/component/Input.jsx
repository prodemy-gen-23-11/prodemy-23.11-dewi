import React from 'react'

export default function Input({type, ...props}) {
  return (
     <input {...props}
     type={type}
     className="form-sytle"
     
   />
  )
}
