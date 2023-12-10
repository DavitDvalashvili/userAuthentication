//import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpInputs } from "../type";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // display error message on the screen
  const handleError = (message: string | undefined) => {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 1000,
    });
  };

  //display success message on the screen
  const handleSuccess = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();

  //checks input values and return errors if required
  const checkInputs = () => {
    if (
      watch("email") == "" ||
      watch("password") == "" ||
      watch("username") == ""
    ) {
      handleError("All fields are required");
    } else if (errors.email) {
      handleError(errors.email.message);
    }
  };

  const submitFunction: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      const response = await axios.post(
        "https://user-authentication-ashen.vercel.app/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //displays message ;
      if (response.data.success) {
        // Sign-up successful
        handleSuccess(response.data.message);
        //after 3 second navigate to login page
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        // Sign-up failed
        handleError(response.data.message);
      }
    } catch (error) {
      // Handle errors
      console.error("Sign-up failed", error);
      handleError("Sign-up failed, server error");
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="inputBox">
          <label>Email</label>
          <input
            type="string"
            placeholder="Enter your email"
            {...register("email", {
              required: "email is require",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        <div className="inputBox">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register("username", {
              required: "Username is require",
            })}
          />
        </div>
        <div className="inputBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is require",
            })}
          />
        </div>
        <button type="submit" onClick={checkInputs} className="form_button">
          Submit
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
