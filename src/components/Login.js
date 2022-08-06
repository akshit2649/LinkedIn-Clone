import React from "react";
import "./Login.css";

function Login() {
  const register = () => {
    console.log("registered");
  };

  const loginToApp = (e) => {
    e.preventDefault();
    console.log("Logged in to app");
  };

  return (
    <div className="login">
      <img src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />

      <form>
        <input type="text" placeholder="Full Name (required if registering)" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
