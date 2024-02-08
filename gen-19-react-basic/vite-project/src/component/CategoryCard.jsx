import React from 'react'

function CategoryCard({children}) {
  return (
    <div>
       <button className='m-5 p-5 text-xl px-5 py-3 rounded-3xl shadow-xl w-48 $bg-yellow-400 duration-300 hover:bg-yellow-500 hover:shadow-md hover:scale-105 hover:translate-y-2 hover:duration-300 hover:shadow-rose-500'>{children}</button>
    </div>
  )
}
export default CategoryCard;