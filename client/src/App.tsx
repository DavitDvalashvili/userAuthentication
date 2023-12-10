import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./StyleComponents/GlobalStyle";
import AppStyled from "./StyleComponents/AppStyle";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <GlobalStyle />
    </AppStyled>
  );
};

export default App;
