import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
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
