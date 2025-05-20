import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../../Context/userContext";

const UserLogin = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { userData, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();


  const { email, password } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, user,{
        withCredentials: true,
      });
      if(res.status === 200) {
        const data = res.data;
        setUserData(data.user);
        alert("User Logged In Successfully");
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    }catch(err) {
      console.log(err);
    }finally{
      setUser({
        email: "",
        password: "",
      })
    }
    
  }


  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
      <img className="w-18 mb-5" src="/Logos/uber_logo_dark.png" alt="" />
      <form action="" onSubmit={submitHandler}>
        <h3 className="text-xl font-medium mb-2 ">What's your Email</h3>
        <input 
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-lg placeholder:text-base"
        required 
        type="email" 
        name="email"
        value={email}
        onChange={(e) => handleOnChange(e)}
        placeholder="email@eexample.com" 
        />
        <h3 className="text-xl mb-2 font-medium">Enter Password</h3>
        <input 
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-lg placeholder:text-base"
        type="password" 
        name="password"
        value={password}
        onChange={(e) => handleOnChange(e)}
        required 
        placeholder="Password" 
        />
        <button className="bg-black text-white  w-full text-2xl rounded p-2">Login</button>
        <p className="text-center"> New here?
        <Link to="/signup" className="text-blue-600 text-lg font-medium mt-2 block">Create New Account</Link>
        </p>
        
      </form>
      </div>
      <div>
        <Link to="/captain/login" className="bg-[#dd7973] text-white  w-full flex items-center justify-center text-2xl rounded p-2"> Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
