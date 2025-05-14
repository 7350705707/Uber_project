import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const CaptainLogout = () => {
     const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      const token = localStorage.getItem("captainToken");

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 201) {
        localStorage.removeItem("captainToken");
        navigate("/captain/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
     <div>CaptainLogout</div>
    <button onClick={handleLogout}>Logout</button>
    </>
   
  )
}

export default CaptainLogout