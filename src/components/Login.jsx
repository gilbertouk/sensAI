import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <p>user4.surname4@gmail.com student</p>
      <p>user101.surname101@yahoo.com teacher</p>
      <form>
        <label htmlFor="email-address">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onLogin}>Login</button>
      </form>
      <p>
        No account yet? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </>
  );
};

export default Login;
