import { ToastContainer } from "react-toastify";
import AppStyled from "../StyleComponents/AppStyle";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { myCookies } from "../type";

const Home = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  //const { userName, setUserName } = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies) {
        navigate("/login");
        console.log(cookies);
      }
      try {
        const response = await axios.post(
          "http://localhost:3004/",
          {},
          { withCredentials: true }
        );
        console.log(response);
        //setUserName(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    verifyCookie();
  }, [cookies, navigate]);

  const Logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/signup");
  };

  return (
    <AppStyled>
      <div className="home_page">
        <h4>
          Welcome <span>{"dvala"}</span>
        </h4>
        <button className="button" onClick={Logout}>
          LOGOUT
        </button>
      </div>
      <ToastContainer />
    </AppStyled>
  );
};

export default Home;
