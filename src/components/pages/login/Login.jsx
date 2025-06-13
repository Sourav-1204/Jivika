import React, { useState } from "react";
import "./login.css";

function Login() {
  const [isSignUp, setIsSignUP] = useState(true);
  console.log(isSignUp, "fifhdf");
  return (
    <div className="login-container-main">
      <div className="login-container-sub">
        <p>{isSignUp ? "Sign Up" : "Login"}</p>
        {isSignUp ? (
          <div className="signup-wrapper">
            <div className="signup-input-container">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </div>
            <div className="already-login">
              <p onClick={() => setIsSignUP(!isSignUp)}>Login</p>
            </div>
          </div>
        ) : (
          <div className="login-wrapper">
            <div className="login-input-container">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </div>
            <div className="forget-signup">
              <p>forget password?</p>
              <p onClick={() => setIsSignUP(!isSignUp)}>New?SignUp</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
