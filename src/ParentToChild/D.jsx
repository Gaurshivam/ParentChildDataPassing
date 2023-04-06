import mySecondContext from './Context';
import React, { useContext } from 'react'

const D = () => {
    const data = useContext(mySecondContext)
  return (
    <div>
    <h2>D Component</h2>
      <p style={{color:"red"}}>Data comes from A Compo:- {data}</p>
    </div>
  )
}

export default D;