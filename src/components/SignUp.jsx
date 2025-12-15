import { useState } from "react";

function SignUp({setIsLogin}) {
  let [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};
    if (!user.name) newError.name = "Name is required";
    if (!user.email) newError.email = "Email is required";
    if (!user.password) newError.password = "Password is required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    setError({});
    console.log("Register", user);
    setUser({ name: "", email: "", password: "" });
    setIsLogin((pre)=>!pre)
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        {error.name && <p className="error">{error.name}</p>}

        <br />

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        {error.email && <p className="error">{error.email}</p>}

        <br />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        {error.password && <p className="error">{error.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
