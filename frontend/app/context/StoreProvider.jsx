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
  const [userId, setUserId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [booking, setBooking] = useState({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserId(user?._id || null);
      console.log(user)
    }
    
  }, []);

  useEffect(() => {
    console.log("User ID updated:", userId);
  }, [userId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const book = JSON.parse(localStorage.getItem("booking"));
      setBooking(book);
      console.log(booking)
    }
    
  }, []);

  useEffect(() => {
    console.log("booking updated:", booking);
  }, [booking]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const order = JSON.parse(localStorage.getItem("order"));
      setOrderId(order?._id || null);
      console.log(order)
    }
    
  }, []);

  useEffect(() => {
    console.log("Order ID updated:", orderId);
  }, [orderId]);

  
 console.log(userId)

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
      booking,
      handleChange,
      handleSubmit,
      userId,
      orderId
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