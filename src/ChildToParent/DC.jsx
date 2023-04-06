import React, { useContext, useState } from 'react'
import mySecondContext from './Context';

const D = () => {
  const {setState} = useContext(mySecondContext)
  const [first, setfirst] = useState("")
  return (
    <div style={{marginBottom:"20px"}}>
    <h2>D Component</h2>
    <input type='text' placeholder='Enter the data' onChange={(e)=>{setfirst(e.target.value)}}/>
    <button onClick={()=>{setState(first)}}>Add Data</button>
    </div>
  )
}

export default D;