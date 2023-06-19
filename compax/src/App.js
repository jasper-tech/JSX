import React from "react";
import  useEffect from "react";
 import './App.css';

 const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Compax App</h2>
        <form>
          <p>Username or Email </p>
          <input type="text" placeholder="" className="placeholder"/>
          <a href="#">Forgot Username?</a>
          <p>Enter Password</p>
          <input type="password" placeholder="" className="placeholder" />
          <a href="#">Forgot Password?</a>
          <p></p>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="signup">
        
      </div>
    </div>
  );
};

export default Login;