import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login/login-page";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setLoginUser={setLoginUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
