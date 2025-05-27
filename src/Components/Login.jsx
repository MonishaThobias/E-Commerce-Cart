import React, { useState } from 'react'
import Header from './Header'
import { NavLink, useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { login } from "../slice/UserSlice";


const Login = () => {
  const [formData,setFormData]=useState({
    name:'',
    password:''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users")
    .then((res) => res.json())
    .then((data) => {
      const user = data.find((user) => user.name === formData.name && user.password === formData.password);
      if (user) {
        dispatch(login(user)); // <-- This stores the user in Redux
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/products");
      } else {
        alert("Invalid credentials");
      }
    })
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="card mt-5 mx-auto w-50 shadow-text">
          <div className="card-header bg-secondary text-center">
            <h2 className='card-title text-white'>Login</h2>
          
          </div>
          <div className="card-body">
            <form onSubmit={handleOnSubmit} className='d-flex flex-column gap-3'>
            <input
  type="text"
  placeholder="Name"
  className="form-control w-75 mx-auto"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>
<input
  type="text"
  placeholder="Password"
  className="form-control w-75 mx-auto"
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>
            <button type='submit' className='btn btn-secondary rounded-pill w-50 mx-auto'>Login</button>
            </form>
            <p className='mt-4 text-center'>If you don't have an account,<NavLink to="/register">Register</NavLink> Here.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
