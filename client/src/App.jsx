import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import HomePage from "./pages/home/home-page";
import ReflectionPage from "./pages/reflection/reflection-page";
import { useEffect } from "react";
import NavBar from "./components/nav-bar/nav-bar";

function App() {
  const [user, setLoginUser] = useState({});

  const findUser = (userID) => {
    axios.post("http://localhost:5000/get-user", { id: userID }).then((res) => {
      setLoginUser({
        _id: res.data.user._id,
        userName: res.data.user.userName,
      });
    });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      findUser(user);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user.userName} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <HomePage user={user} />
              ) : (
                <LoginPage setLoginUser={setLoginUser} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<LoginPage setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reflection" element={<ReflectionPage user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
