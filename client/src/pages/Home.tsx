import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>"username"</span>
        </h4>
        <button>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
