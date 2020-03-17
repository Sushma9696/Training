import React, { Component } from "react";
import { Link } from "react-router-dom";
const LogOut = () => {
  return (
    <div>
      <h2 className="text-center mt-5 bg-info">
        You have logged out successfully!
      </h2>
      <p className="small text-center">
        Click <Link to="/login">here</Link> to login again
      </p>
    </div>
  );
};

export default LogOut;
