import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isHome, setIsHome] = useState(false);

  return (
    <>
      <nav>
        <h3>LOGO</h3>
        {isHome ? (
          <button className="nav-btn">Home</button>
        ) : (
          <button className="nav-btn" onClick={() => setIsLogin((pre) => !pre)}>
            {isLogin ? "Register" : "login"}
          </button>
        )}
      </nav>

      {isHome ? (
        <Home />
      ) : isLogin ? (
        <Login setIsHome={setIsHome} />
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
      {}
    </>
  );
}

export default App;
