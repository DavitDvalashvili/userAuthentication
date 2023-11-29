import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
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
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
