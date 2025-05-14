import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CaptainLogin = () => {

   const [captain, setCaptain] = useState({
      email: "",
      password: "",
    });

    const navigate = useNavigate();
    const { setCaptainData} = useContext(CaptainDataContext);



    const { email, password } = captain;

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setCaptain((prev) => ({ ...prev, [name]: value }));
    }
  
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/captains/login`, captain,{
          withCredentials: true
        });

        if(res.status === 200) {
          const data = res.data;
          setCaptainData(data.captain);
          localStorage.setItem("captainToken", data.token);
          alert("Captain Logged In Successfully");
          navigate("/captain/home");
        }
        console.log(res);
      }catch(err) {
        console.log(err);
      }finally{
        setCaptain({
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
        <p className="text-center"> Join a fleet?
        <Link to="/captain/signup" className="text-blue-600 text-lg font-medium mt-2 block">Register as a Captain</Link>
        </p>
        
      </form>
      </div>
      <div>
        <Link to="/login" className="bg-[#7757d7] text-white  w-full flex items-center justify-center text-2xl rounded p-2"> Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin;