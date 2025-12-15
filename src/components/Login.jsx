import { useState } from "react";

function Login() {
  let [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};
    if (!user.email) newError.email = "Email is required";
    if (!user.password) newError.password = "Password is required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    setError({});
    console.log("Login", user);
    setUser({ email: "", password: "" });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
