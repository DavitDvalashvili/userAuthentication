import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginInputs } from "../type";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
  } = useForm<LoginInputs>();

  //checks input values and return errors if required
  const checkInputs = () => {
    if (watch("email") == "" || watch("password") == "") {
      handleError("All fields are required");
    } else if (errors.email?.message) {
      handleError(errors.email.message);
    }
  };

  const submitFunction: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await axios.post(
        "https://user-authentication-ashen.vercel.app/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //displays message ;
      if (response.data.success) {
        // login successful
        handleSuccess(response.data.message);
        localStorage.setItem("authToken", response.data.token);
        //after 1 second navigate to login page
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        // log in failed
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
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="inputBox">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        <div className="inputBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
          />
        </div>
        <button type="submit" className="form_button" onClick={checkInputs}>
          Submit
        </button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
