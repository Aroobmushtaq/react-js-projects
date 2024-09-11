import React from 'react'
import { useState } from 'react'
import { AppContext } from '../App'

function Home() {
    const[user,setUser]=useState("")
    const handler=(e)=>{
       setUser(e.target.value)
    }
  return (
    <div>
        <input
        type='text'
        placeholder='Enter Name'
        onChange={handler}
        />
        <h1>{user}</h1>
    </div>
  )
}

export default Home




