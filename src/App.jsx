import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dummy from "./components/Dummy";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <button onClick={() => setIsLogin((pre) => !pre)}>
        {isLogin ? "Register" : "login"}
      </button>

      {isLogin ? <Login /> : <SignUp />}
      <Dummy name="naresh" />
    </>
  );
}

export default App;
