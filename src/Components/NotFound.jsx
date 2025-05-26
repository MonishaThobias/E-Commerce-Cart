import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Oops! The page you’re looking for doesn’t exist.</p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary mt-3"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
