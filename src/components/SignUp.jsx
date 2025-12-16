import { useState } from "react";

function SignUp({ setIsLogin }) {
  let [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const validateError = () => {
    let newError = {};
    if (!user.name) newError.name = "Name is required";
    if (!user.email) newError.email = "Email is required";
    if (!user.password) newError.password = "Password is required";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationgError = validateError();

    if (Object.keys(validationgError).length > 0) {
      setErrors(validationgError);
      return;
    }

    setErrors({});
    localStorage.setItem("user",JSON.stringify(user))
    console.log("Register", user);
    // setUser({ name: "", email: "", password: "" });
    setIsLogin((pre) => !pre);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));

    setErrors((pre) => ({ ...pre, [name]: "" }));
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          className={errors.name ? "input-error" : ""}
          type="text"
          placeholder="Enter name"
          name="name"
          value={user.name}
          onChange={(e) => handleOnChange(e)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <br />

        <input
          className={errors.email ? "input-error" : ""}
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={(e) => handleOnChange(e)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <br />

        <input
          className={errors.password ? "input-error" : ""}
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={(e) => handleOnChange(e)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
