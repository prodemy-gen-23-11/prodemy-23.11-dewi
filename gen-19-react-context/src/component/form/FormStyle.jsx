import React from 'react'

function FormStyle({children}) {
  return (
    <div className=' bg-gradient-to-b from-blue-300 to-blue-50 w-[800px] font-serif m-5 py-5 rounded-md'>
     <div className=''>
     {children}
     </div>
    </div>
  )
}
function Title({children}) {
     return (
         <div className=" text-xl text-center border-b-2 border-gray-100 pb-5 m-3 uppercase">
   {children}
         </div>
     )
 }
 function Body({children}) {
     return (
         <div className=" mx-5 p-1 px-5">
   {children}
         </div>
     )
 }
 function Footer({children}) {
  return (
      <div className="flex justify-center mt-4">
{children}
      </div>
  )
}

FormStyle.Title = Title
FormStyle.Body = Body
FormStyle.Footer = Footer

export default FormStyle;
