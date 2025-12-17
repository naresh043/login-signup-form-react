import { useState, useRef, useEffect } from "react";

function SignUp({ setIsLogin }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  // refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // auto focus name input on component mount
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const validateError = () => {
    let newError = {};
    if (!user.name) newError.name = "Name is required";
    if (!user.email) newError.email = "Email is required";
    if (!user.password) newError.password = "Password is required";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateError();

    // focus first invalid field
    if (validationError.name) {
      setErrors(validationError);
      nameRef.current.focus();
      return;
    }

    if (validationError.email) {
      setErrors(validationError);
      emailRef.current.focus();
      return;
    }

    if (validationError.password) {
      setErrors(validationError);
      passwordRef.current.focus();
      return;
    }

    // success
    setErrors({});
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Register", user);

    // reset form
    setUser({ name: "", email: "", password: "" });

    // focus name again after reset
    nameRef.current.focus();

    setIsLogin((prev) => !prev);
  };

  const handleOnChange = (e) => {
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
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className={errors.name ? "input-error" : ""}
          type="text"
          placeholder="Enter name"
          name="name"
          value={user.name}
          onChange={handleOnChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <br />

        <input
          ref={emailRef}
          className={errors.email ? "input-error" : ""}
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={handleOnChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <br />

        <input
          ref={passwordRef}
          className={errors.password ? "input-error" : ""}
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleOnChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
