import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const INITIAL_SIGNUP_DATA = {
  userName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const Signup = () => {
  const [signupData, setSignupData] = useState(INITIAL_SIGNUP_DATA);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let err = {};
    for (const key in signupData) {
      if (!signupData[key]) {
        err[key + "_err"] = "Please enter " + key;
      } else if (key === "email" && !checkValidEmail(signupData[key])) {
        err[key + "_err"] = "Invalid email address";
      } else if (key === "password" && !checkValidPassword(signupData[key])) {
        err[key + "_err"] =
          "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };
  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        label="User Name"
        name="userName"
        onChange={handleChange}
        value={signupData.userName}
        type="text"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        margin="dense"
        label="Email"
        name="email"
        onChange={handleChange}
        value={signupData.email}
        type="email"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        margin="dense"
        label="PhoneNumber"
        type="tel"
        name="phoneNumber"
        onChange={handleChange}
        value={signupData.phoneNumber}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        margin="dense"
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={signupData.password}
        fullWidth
        variant="outlined"
      />

      <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
        Sign Up
      </Button>
    </div>
  );
};

export default Signup;
