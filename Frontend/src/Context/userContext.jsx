import React, { createContext } from 'react'

export const UserDataContext = createContext();

const userContext = ({children}) => {

    const [user, setUser] = React.useState({
        email: "",
        firstname: "",
        lastname: "",
      });
  return (
    <div>
        <UserDataContext.Provider value={{ user, setUser }}>
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext