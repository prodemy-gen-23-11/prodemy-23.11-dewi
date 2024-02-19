import React from 'react'

export default function Label({value, children, ...props}) {

  return (
    <div>
      <label className='label-style' {...props}>{value|| children}</label>
    </div>
  )
}
