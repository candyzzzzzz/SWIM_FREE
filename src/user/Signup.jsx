import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidPhoneNumber,
  checkValidUserName,
} from "../utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
  const { addSignupData } = useContext(DataContext);
  const navigate = useNavigate();
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
      } else if (key === "userName" && !checkValidUserName(signupData[key])) {
        err[key + "_err"] = "Username must be at least 3 characters long";
      } else if (
        key === "phoneNumber" &&
        !checkValidPhoneNumber(signupData[key])
      ) {
        err[key + "_err"] = "Invalid phone number format";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addSignupData(signupData);
      setSignupData(INITIAL_SIGNUP_DATA);
      navigate("/data");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 4,
        background: "linear-gradient(135deg, #e3f2fd, #e8f5e9)",
        gap: { xs: 4, md: 8 }, // Add gap between panels
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 480,
          mx: "auto",
          p: 4,
          mt: 6,
          borderRadius: 4,
          background: "#ffffffcc",
          backdropFilter: "blur(10px)",
          boxShadow: 6,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 900, mb: 3, textAlign: "center", color: "#2e7d32" }}
        >
          🏊‍♂️ Join SWIM FREE
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 4, textAlign: "center", color: "#555" }}
        >
          Create your account to get started
        </Typography>

        <TextField
          autoFocus
          margin="normal"
          label="User Name"
          name="userName"
          onChange={handleChange}
          value={signupData.userName}
          type="text"
          error={Boolean(errors.userName_err)}
          helperText={errors.userName_err}
          fullWidth
          variant="outlined"
        />

        <TextField
          margin="normal"
          label="Email"
          name="email"
          onChange={handleChange}
          value={signupData.email}
          type="email"
          error={Boolean(errors.email_err)}
          helperText={errors.email_err}
          fullWidth
          variant="outlined"
        />

        <TextField
          margin="normal"
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          onChange={handleChange}
          value={signupData.phoneNumber}
          error={Boolean(errors.phoneNumber_err)}
          helperText={errors.phoneNumber_err}
          fullWidth
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={passwordVisible ? "text" : "password"}
          value={signupData.password}
          onChange={handleChange}
          error={Boolean(errors.password_err)}
          helperText={errors.password_err}
          margin="normal"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            fontWeight: 700,
            py: 1.4,
            fontSize: 16,
            borderRadius: 3,
            background: "linear-gradient(to right, #43a047, #1976d2)",
          }}
        >
          Sign Up
        </Button>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            Already have an account?
            <Button
              href="/login"
              sx={{ ml: 1, textTransform: "none", color: "#1976d2" }}
            >
              Log In
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
