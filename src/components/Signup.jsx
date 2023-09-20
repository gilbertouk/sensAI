import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import SendIcon from "@mui/icons-material/Send";

import { postNewUser } from "../utils/api";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [posting, setPosting] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "test",
    surname: "test",
    email: "@test.com",
    password: "!QAZ2wsx",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPosting(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      await postNewUser(newUser);
      setPosting(false);

      navigate("/");
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };
  const handleChange = (event) => {
    const newUserState = { ...newUser, [event.target.id]: event.target.value };
    setNewUser(newUserState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="name"
              label="Name"
              value={newUser.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="surname"
              label="Surname"
              value={newUser.surname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="email"
              label="Email"
              value={newUser.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="password"
              label="Password"
              value={newUser.password}
              onChange={handleChange}
              type="password"
            />
          </Grid>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <LoadingButton
            type="submit"
            endIcon={<SendIcon />}
            loading={posting}
            loadingPosition="end"
            variant="contained"
          >
            Create Account
          </LoadingButton>
        </Grid>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
};

export default Signup;
