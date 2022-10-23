import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import HomePage from "./pages/home/home-page";
import ReflectionPage from "./pages/reflection/reflection-page";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/reflection" element={<ReflectionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
