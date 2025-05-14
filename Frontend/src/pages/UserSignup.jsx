import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../Context/userContext";
import { useContext } from "react";



const UserSignup = () => {

   const [user, setUser] = useState({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    });



  const {userData, setUserData} = useContext(UserDataContext);

   const navigate = useNavigate();

    const { email, password, firstname, lastname } = user;

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    }
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const formattedUser = {
          email: user.email,
          password: user.password,
          fullname: {
            firstname: user.firstname,
            lastname: user.lastname
          }
        };
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, formattedUser,{
          withCredentials: true,
        });
        if(res.status === 201) {
         const data = res.data;
         setUserData(data.user);
          localStorage.setItem("token", data.token);
         alert("User Created Successfully");
          console.log(data);
          navigate("/home"); 
        }



      }catch(err) {
        console.log(err);
      }finally{
        setUser({
          email: "",
          password: "",
          firstname: "",
          lastname: "",
        })
      }
    }

  return (
      <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
      <img className="w-18 mb-5" src="/Logos/uber_logo_dark.png" alt="" />
      <form action="" onSubmit={submitHandler}>
            <h3 className="text-base font-medium mb-2 ">What's your Name</h3>
        <div className='flex gap-2 mb-4'>
       
        <input 
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300  w-1/2 text-base placeholder:text-base"
        required
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => handleOnChange(e)}
        placeholder="First Name"
        />
        <input 
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300  w-1/2 text-base placeholder:text-base"
        required
        type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => handleOnChange(e)}
        placeholder="Last Name"
        />


 
        </div>

        <h3 className="text-base font-medium mb-2 ">What's your Email</h3>
        <input
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-base placeholder:text-base"
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleOnChange(e)}
        placeholder="email@eexample.com" 
        />
        <h3 className="text-base mb-2 font-medium">Enter Password</h3>
        <input
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-base placeholder:text-base"
        type="password" 
        name="password"
        value={password}
        onChange={(e) => handleOnChange(e)}
        required 
        placeholder="Password" 
        />
        <button className="bg-black text-white  w-full text-2xl rounded p-2 mt-5">Sign Up</button>
        <p className="text-center mt-5"> New here?
        <Link to="/login" className="text-blue-600 text-lg font-medium mt-2 block">Already have an Account</Link>
        </p>
        
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>by proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliate to the number provided</p>
      </div>

    </div>
  )
}

export default UserSignup