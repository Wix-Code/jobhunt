"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const storeContext = createContext(null)
export const StoreProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
 

  const handleChange = async (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:8800/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(userData),
        credentials: 'include', 
      });
  
      // Wait for the response to be parsed
      const data = await response.json();
  
      if (data.success === true) {
        toast.success(data.message);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUserData("");
        setLoading(false);
        window.location.replace("/");
      } else {
        toast.error(data.message);
        setUserData("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
      setLoading(false);
    }
  };

  return (
    <storeContext.Provider value={{
      userData,
      setUserData,
      loading,
      handleChange,
      handleSubmit,
    }}>
      {children}
    </storeContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(storeContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};