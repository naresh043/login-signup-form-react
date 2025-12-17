import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Dummy from "./components/Dummy";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <nav>
        <h3>LOGO</h3>
        {isHome ? (
          <button
            className="nav-btn"
            onClick={() => {
              console.log("btn is clicked");
              setIsHome(false);
              setIsLogin(true);
            }}
          >
            Logout
          </button>
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
    </>
  );
}

export default App;
