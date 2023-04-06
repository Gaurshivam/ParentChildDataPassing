import { createContext } from "react";

const myContext = createContext();

 const Context = ( {children}) =>{
    const data2 = {
        Name:"Sam",
        Age:23
    }
    const data3 ={
        Name:"Shiva",
        Age:23
    }
    return <myContext.Provider value={{data2,data3}}>
    {children}
    </myContext.Provider>
}

export  {Context,myContext};