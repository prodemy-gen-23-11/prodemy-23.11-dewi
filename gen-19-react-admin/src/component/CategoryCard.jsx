import React from 'react'

function CategoryCard({children}) {
  return (
    <div>
       <button className='btn-card'>{children}</button>
    </div>
  )
}
export default CategoryCard;