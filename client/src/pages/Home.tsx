import { ToastContainer, toast } from "react-toastify";
import AppStyled from "../StyleComponents/AppStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [expired, setExpired] = useState<boolean>(false);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const refresh = async () => {
      if (!token || expired) {
        navigate("/login");
      } else {
        const response = await axios.post(
          "https://userauthentication-backend.onrender.com",
          {},
          {
            headers: {
              token: token,
            },
          }
        );
        setUserName(response.data.user);
        //setExpired(response.data.status);
        if (!response.data.status) {
          setExpired(true);
        }
      }
    };
    refresh();
  }, [userName, expired]);

  const logout = () => {
    localStorage.removeItem("authToken");
    setExpired(true);
  };

  const handleGreeting = (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  useEffect(() => {
    if (userName !== "") {
      handleGreeting(`Welcome ${userName}`);
    }
  }, [userName]);

  return (
    <AppStyled>
      {userName && (
        <div className="home_page">
          <h4>
            Welcome <span>{userName}</span> You are logged in
          </h4>
          <button className="button" onClick={logout}>
            LOGOUT
          </button>
        </div>
      )}
      <ToastContainer />
    </AppStyled>
  );
};

export default Home;
