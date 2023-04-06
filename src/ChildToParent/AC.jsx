import React, { useState } from 'react'
import mySecondContext from './Context'
import B from './BC'

export default function A() {
  const [state,setState] = useState("")
  return (
    <div>
      <h2>A Component</h2>
      <p style={{color:"green"}}>Data comes from D Comp:- {state}</p><hr/>    
      <mySecondContext.Provider value={{setState}}>
      <B/>
      </mySecondContext.Provider>
    </div>
  )
}