import React from "react";
import  useEffect from "react";
 import './App.css';


 const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Compax App</h2>
        <form className="simpleForm">
          <p>Username or Email </p>
          <input type="text" placeholder="" className="placeholder" required/>
          <a href="#">Forgot Username?</a>
          <p>Enter Password</p>
          <input type="password" placeholder="" className="placeholder" required />
          <a href="#">Forgot Password?</a>
          <p></p>
          <button type="submit">Login</button>
          <p><div className="signup">New to compax? <a href="#">Create an account</a></div></p>
        </form>
      </div>
      </div>
      
  );

};


export default Login;