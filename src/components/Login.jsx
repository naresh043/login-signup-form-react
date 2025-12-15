import { useState } from "react";

function Login() {
  let [user, setUser] = useState({ email: "", password: "" });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!user?.email) {
      newError.email = "Email is required";
    }

    if (!user?.password) {
      newError.password = "Password is required";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    setError({});
    console.log("Login", user);

    setUser({ email: "", password: "" });
  };

  return (
    <div style={{ maxWidth: "300px", margin: "40px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={user?.email}
          onChange={(e) => {
            let { name, value } = e.target;
            console.log({ name, value });
            setUser({ ...user, [name]: value });
          }}
        />
        {error.email && <p className="error">{error.email}</p>}

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user?.password}
          onChange={(e) => {
            let { name, value } = e.target;
            console.log({ name, value });
            setUser({ ...user, [name]: value });
          }}
        />
        {error.password && <p className="error">{error.password}</p>}

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
