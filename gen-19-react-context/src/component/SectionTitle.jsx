import React from 'react'

function Section({children}) {
  return (
    <div>
          <h1 className='section-title mt-20 p-5 '>{children}</h1>
    </div>
  )
}

export default Section;