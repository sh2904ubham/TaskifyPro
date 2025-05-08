import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Task Manager
        </Link>
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-white hover:bg-blue-600 p-2 rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:bg-blue-600 p-2 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
