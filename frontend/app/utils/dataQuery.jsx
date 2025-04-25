"use client"

import { useQuery } from "@tanstack/react-query";

const fetchHotelRooms = async () => {
  const response = await fetch("https://wixad-hotels.onrender.com/api/room", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch hotel rooms");
  }
  const data = await response.json();
  return data;
}

export const useFetchHotelRooms = () => {
  return useQuery({
    queryKey: ["hotelRooms"],
    queryFn: fetchHotelRooms,
  });
};

const fetchHotelRoomById = async (id) => {
  const response = await fetch(`https://wixad-hotels.onrender.com/api/room/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch hotel room by ID");
  }
  const data = await response.json();
  return data.room;
}

export const useFetchHotelRoomById = (id) => {
  return useQuery({
    queryKey: ["hotelRoom", id],
    queryFn: () => fetchHotelRoomById(id),
  });
};