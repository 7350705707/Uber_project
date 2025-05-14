import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 201) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h2>User Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserLogout