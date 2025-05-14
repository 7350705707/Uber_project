import React, { useState } from 'react'
import { createContext } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {

   const [captainData, setCaptainData] = useState({
          email: "",
          firstname: "",
          lastname: "",
      });

    return (
      <CaptainDataContext.Provider value={{captainData, setCaptainData}}>
        {children}  
        </CaptainDataContext.Provider>
    )
}
export default CaptainContext