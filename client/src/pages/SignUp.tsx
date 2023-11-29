//import { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
