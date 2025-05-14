
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserProtectedWrapper = ({children}) => {
   const token = localStorage.getItem("token");
    const navigate = useNavigate();


useEffect(() => {
    if(!token) {
        navigate("/login");
    }else{
       navigate("/home");
    }

  },[]);

  return (
    <div>{children}</div>
  )
}

export default UserProtectedWrapper