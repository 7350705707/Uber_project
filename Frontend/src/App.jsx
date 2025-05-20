import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/common/Start";
import Home from "./pages/UserPages/Home";
import UserLogin from "./pages/UserPages/UserLogin";
import UserSignup from "./pages/UserPages/UserSignup";
import CaptainLogin from "./pages/CaptainPages/CaptainLogin";
import CaptainSignup from "./pages/CaptainPages/CaptainSignup";
import UserProtectedWrapper from "./pages/UserPages/UserProtectedWrapper";
import CaptainProtectedWrapper from "./pages/CaptainPages/CaptainProtectedWrapper";
import UserLogout from "./pages/UserPages/UserLogout";
import CaptainHome from "./pages/CaptainPages/CaptainHome";
import CaptainLogout from "./pages/CaptainPages/CaptainLogout";
import Riding from "./components/Riding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/riding" element={<Riding />} />
        <Route
          path="/login"
          element={
            <UserProtectedWrapper>
              {" "}
              <UserLogin />{" "}
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <UserProtectedWrapper>
              {" "}
              <UserSignup />{" "}
            </UserProtectedWrapper>
          }
        />
        <Route path="/captain/login" element={
          <CaptainProtectedWrapper>
            <CaptainLogin />
          </CaptainProtectedWrapper>}
        />
        <Route path="/captain/signup" element={
          <CaptainProtectedWrapper>
            <CaptainSignup />
          </CaptainProtectedWrapper> }
        />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              {" "}
              <Home />{" "}
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/captain/home"
          element={
            <CaptainProtectedWrapper>
              {" "}
              <CaptainHome />{" "}
            </CaptainProtectedWrapper>
          }
        />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/captain/logout" element={<CaptainLogout />} />
        
      </Routes>
    </div>
  );
};

export default App;
