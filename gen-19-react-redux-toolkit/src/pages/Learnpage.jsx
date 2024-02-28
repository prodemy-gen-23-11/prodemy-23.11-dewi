import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Learnpage() {

     //useState
     const [name, setName] = useState("")
     const changeName = e => setName(e.target.value)

     //useSearchParams
     // const [searchParams, setSearchParams] =useSearchParams();
     // const name = searchParams.get('name');
     //

     //state --> use Location
     const data1 = {
          from: "Link #1",
          message: "Welcome to KindaCode.com",
          timestamp: Date.now(),
        };
      
        // this is for the second Link
        const data2 = {
          from: "Link #2",
          message: "Just another message",
          timestamp: Date.now(),
        };

  return (
    <div className='text-center font-bold text-xl p-5 uppercase'>
      <p>Hello {name}</p>
     
     {/* useState */}
      <input
      type="text"
      value={name}
      onChange={changeName}
      className='border-2 border-blue-400'
    />
      {/* useSeacrhParams */}
      {/* <input
      type="text"
      value={name}
      className='border-2 border-blue-400' 
      onChange={()=>setSearchParams({name: 'Dewi'})}/> */}
      
      <h1>Home Page</h1>
      <p>
        <Link to="/about" state={data1}>
          Go to About Page <p className='label-style'>Link 1</p>
        </Link>
      </p>
      <p>
        <Link to="/about" state={data2}>
          Go to About Page (Link #2)
        </Link>
      </p>
    </div>
  )
}
