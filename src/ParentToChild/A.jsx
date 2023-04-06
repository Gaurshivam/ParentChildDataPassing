import React, { useState } from 'react'
import B from './B'
import mySecondContext from './Context'

export default function A() {
   const [state,setState]=useState("");
   const [data,setData]=useState("");
  return (
    <div>
      <h2>A Component</h2>
      <input type='text' placeholder='Enter the text' value={state} onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={()=>setData([state])}>Add Data</button>
      <mySecondContext.Provider value={data}>
      <B/>
      </mySecondContext.Provider>
    </div>
  )
}


