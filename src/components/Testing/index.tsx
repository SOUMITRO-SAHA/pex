"use client";
import axios from "axios";
import React from "react";

const Tesing: React.FC = () => {
  const handleClick = async () => {
    try {
      const postData: Object = {
        name: "Soumitra",
        phoneNumber: "+919832098320",
      };
      const { data } = await axios.post("/api/email", postData);
      console.log(data);
    } catch (error) {}
  };

  return <button onClick={handleClick}>Tesing Now !!!</button>;
};

export default Tesing;
