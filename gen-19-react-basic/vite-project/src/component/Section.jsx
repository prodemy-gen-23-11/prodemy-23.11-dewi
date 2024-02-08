import React from 'react'

function Section({children}) {
  return (
    <div>
          <h1 className='text-3xl text-center mt-20 p-5 uppercase font-serif font-bold'>{children}</h1>
    </div>
  )
}

export default Section;