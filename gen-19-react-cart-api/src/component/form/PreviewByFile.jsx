import React from 'react'

export default function PreviewByFile({register}) {
  return (
    <div className='flex gap-2'>
      <input
        type='file'
        className="form-style"
        {...register("preview[0]")}
        id="preview"
        
      />
      <input
        type='file'
        className="form-style"
        {...register("preview[1]")}
        id="preview"
      />
      <input
        type='file'
        className="form-style"
        {...register("preview[2]")}
        id="preview"
      />
    </div>
  )
}
