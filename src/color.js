import React from 'react'
import { useState } from 'react'

function Color() {
    const [clr , setClr]=useState("")
  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundColor:clr}}>
        <div className='fixed flex flex-wrap inset-x-0 justify-center top-10 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"black"}} onClick={()=>setClr("black")}>Black</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"orange"}}  onClick={()=>setClr("orange")}>Orange</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"skyblue"}}  onClick={()=>setClr("skyblue")}>Sky Blue</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"pink"}}  onClick={()=>setClr("pink")}>Pink</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"olive"}}  onClick={()=>setClr("olive")}>Olive</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"blue"}}  onClick={()=>setClr("blue")}>Blue</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{backgroundColor:"purple"}}  onClick={()=>setClr("purple")}>Purple</button>
            </div>
        </div>
      
    </div>
  )
}

export default Color
