import React, { useState } from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newUser = { ...formData, token: uuidv4() }; // Generate unique token
    try {
      // Check if the user already exists
      const existingUsers = await axios.get(`http://localhost:3001/users?email=${formData.email}`);
      if (existingUsers.data.length > 0) {
        alert("User already exists with this email.");
        return;
      }

      // Register the new user
      const response = await axios.post("http://localhost:3001/users", newUser);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering.");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="card mt-5 mx-auto w-50 shadow-text">
          <div className="card-header bg-secondary text-center">
            <h2 className="card-title text-white">Register</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleOnSubmit} className="d-flex flex-column gap-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control w-75 mx-auto"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control w-75 mx-auto"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control w-75 mx-auto"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="submit"
                className="btn btn-secondary rounded-pill w-50 mx-auto"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account? <NavLink to="/login">Login</NavLink> here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
