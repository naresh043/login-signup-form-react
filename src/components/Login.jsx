import { useState, useRef, useEffect } from "react";

function Login({ setIsHome }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // refs for inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // auto focus email on component mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!user.email) newErrors.email = "Email is required";
    if (!user.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    // focus based on validation error
    if (validationErrors.email) {
      setErrors(validationErrors);
      emailRef.current.focus();
      return;
    }

    if (validationErrors.password) {
      setErrors(validationErrors);
      passwordRef.current.focus();
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Please Register first!");
      emailRef.current.focus();
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (
      parsedUser.email !== user.email ||
      parsedUser.password !== user.password
    ) {
      alert("Invalid credentials");
      passwordRef.current.focus();
      return;
    }

    alert("Login successful!");

    setErrors({});
    setUser({ email: "", password: "" });

    emailRef.current.focus();

    setIsHome((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          className={errors.email ? "input-error" : ""}
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          ref={passwordRef}
          className={errors.password ? "input-error" : ""}
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
