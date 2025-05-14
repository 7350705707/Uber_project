import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const CaptainSignup = () => {

  const navigate = useNavigate();
  const { setCaptainData} = useContext(CaptainDataContext);

    const [user, setUser] = useState({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    });
    const { email, password, firstname, lastname, color, plate, capacity, vehicleType } = user;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    }    
    
    const submitHandler = async (e) => {
      e.preventDefault();
      
      // Basic validation
      if (firstname.length < 3) {
        alert("First name must be at least 3 characters long");
        return;
      }
      
      if (lastname.length < 3) {
        alert("Last name must be at least 3 characters long");
        return;
      }
      
      if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
      }
      
      if (color.length < 3) {
        alert("Vehicle color must be at least 3 characters long");
        return;
      }
        if (plate.length < 3) {        alert("Vehicle plate must be at least 3 characters long");
        return;
      }
        // Validate plate format (MH16BA6715)
     
      if (plate.length != 10) {
        alert("Please enter a valid plate number in format MH16BA6715");
        return;
      }
      
      if (isNaN(capacity) || capacity === "") {
        alert("Capacity must be a number");
        return;
      }
      
      if (!vehicleType) {
        alert("Please select a vehicle type");
        return;
      }
      
      const userData = {
        email,
        fullname: {
          firstname,
          lastname
        },
        password,
        vehicle: {
          color: color,
          plate: plate,
          capacity: capacity,
          vehicleType: vehicleType,
        }
      }
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, userData,{
          withCredentials: true} );

        if(res.status === 201) {
          const data = res.data;
          setCaptainData(data.captain);
          localStorage.setItem("captainToken", data.token);
          alert("Captain Created Successfully");
          navigate("/captain/home");
        }
      }catch(err) {
        console.log(err);
      }finally{
        setUser({
          email: "",
          password: "",
          firstname: "",
          lastname: "",
           color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
        })
      }
    }



  return (
   <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
      <img className="w-18 mb-5" src="/Logos/uber_logo_dark.png" alt="" />
      <form action="" onSubmit={submitHandler}>
            <h3 className="text-base font-medium mb-2 ">What's our Captain's Name</h3>
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
        />        <div className=' gap-2 mb-4'>
        <h3 className="text-base font-medium mb-2">What's your Vehicle's Details</h3>
        
        <h3 className="text-sm font-medium mb-2 mt-2">License Plate Number</h3>
        <div className="flex items-center mb-4">
          <div className="bg-[#333] text-white font-bold rounded-l px-4 py-2">
            IND
          </div>          <input type="text"          className="bg-[#eeeeee] uppercase rounded-r px-4 py-2 border-2 border-gray-300 w-full text-base placeholder:text-base tracking-widest font-bold"
          name="plate"
          value={plate}
          onChange={(e) => handleOnChange(e)}
          required
          placeholder="MH16BA6715"
          maxLength="12"
          />
        </div>
        
        <h3 className="text-base font-medium mb-2">Vehicle Other Details</h3>
        <input
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-base placeholder:text-base"
        type="text" 
        name="color"
        value={color}
        onChange={(e) => handleOnChange(e)}
        required 
        placeholder="Color (e.g., Black, White, Red)" 
        /><input type="number"
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-base placeholder:text-base"
        name="capacity"
        value={capacity}
        onChange={(e) => handleOnChange(e)}
        required
        min="1"
        max="10"
        placeholder="Capacity (1-10)"
        />

        <select
        className="bg-[#eeeeee] rounded px-4 py-2 border-2 border-gray-300 mb-4 w-full text-base"
        name="vehicleType"
        value={vehicleType}
        onChange={(e) => handleOnChange(e)}
        required
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
        </div>



        <button className="bg-black text-white  w-full text-2xl rounded p-2 mt-5">Sign Up</button>
        <p className="text-center mt-5"> New here?
        <Link to="/captain/login" className="text-blue-600 text-lg font-medium mt-2 block">Already have an Account</Link>
        </p>
        
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy</span>  and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  )
}

export default CaptainSignup