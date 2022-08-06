import React, { useRef, useState } from "react";
import "./Login.css";
import { auth } from "../firabse";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const email = useRef();
  const password = useRef();
  const [name, setName] = useState("");
  const profilePic = useRef();
  const dispatch = useDispatch();

  const register = () => {
    if (name.length === 0) {
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
            displayName: name,
            photoURL: profilePic.current.value,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.id,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <img
        src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        alt="img"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
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
