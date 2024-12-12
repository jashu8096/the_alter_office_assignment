import { useState } from "react";
import { auth } from "../../firebase";
import "./Signin.css"; 

const Signin = () => {
    const [data,setData]= useState({
        email:"",
        password:""
    })
    const {email,password}= data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const changeHandler = (e)=>{
       setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="signin-title">Sign In</h2>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            required
            value={email}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
           value={password}
            type="password"
            id="password"
            className="form-input"
            required
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="form-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
