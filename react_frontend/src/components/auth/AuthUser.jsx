import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function AuthUser() {

    const navigate = useNavigate()
    const {token, setToken} = useState();
    const {user, setUser} = useState();

    const saveToken = (user, token) =>{
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard/Dashboard');
    };

    const http = axios.create({
        baseURL:'http://localhost:8000/api',
        headers:{
            "content-type" : "application/json",
        },
    });
  return (
   http
  )
}
