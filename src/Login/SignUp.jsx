import { useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase"; // Import auth from your firebase.js

import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;

    // Use createUserWithEmailAndPassword function
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error creating user:",error.code, error.message);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" autoComplete="on" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
            onChange={changeHandler}
            value={data.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            required
            onChange={changeHandler}
            value={data.password}
          />
        </div>

        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
