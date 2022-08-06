import React, { useRef } from "react";
import "./Login.css";
import { auth } from "../firabse";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const profilePic = useRef();
  const dispatch = useDispatch();

  const register = async () => {
    if (name.current.value.length === 0) {
      return alert("Enter a valid name");
    }

    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name.current.value,
            photoURL: profilePic.current.value,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uis: userAuth.user.uid,
                displayName: name.current.value,
                photoURL: profilePic.current.value,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    console.log("Logged in to app");
  };

  return (
    <div className="login">
      <img
        src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        alt="img"
      />

      <form>
        <input
          ref={name}
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          type="text"
          ref={profilePic}
          placeholder="Profile pic URL (optional)"
        />
        <input type="email" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
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
