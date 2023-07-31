import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Index = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/portfolio-project')
  },[navigate]);

  return <></>
}