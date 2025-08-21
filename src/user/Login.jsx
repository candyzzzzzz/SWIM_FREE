import {
  Box,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { MdCheckCircle } from "react-icons/md";
import { checkValidEmail, checkValidPassword } from "../utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const INITIAL_LOGIN_DATA = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(INITIAL_LOGIN_DATA);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { addLoginData } = useContext(DataContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let err = {};
    for (const key in loginData) {
      if (!loginData[key]) {
        err[key + "_err"] = "Please enter " + key;
      } else if (key === "email" && !checkValidEmail(loginData[key])) {
        err[key + "_err"] = "Invalid email address";
      } else if (key === "password" && !checkValidPassword(loginData[key])) {
        err[key + "_err"] =
          "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number";
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addLoginData(loginData);
      setLoginData(INITIAL_LOGIN_DATA);
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
      {/* Info Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 380,
          p: 4,
          backgroundColor: "#ffffffcc",
          borderRadius: 4,
          boxShadow: 4,
          backdropFilter: "blur(10px)",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 900, mb: 2, color: "#1565c0" }}
        >
          🚀 Train Like a Pro
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: "#333" }}>
          Unlock exclusive benefits:
        </Typography>
        {[
          "Training plans",
          "Technique improvement courses",
          "100+ instruction videos",
          "Workout finder and collections",
        ].map((text, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <MdCheckCircle
              style={{ color: "#2e7d32", marginRight: 10, fontSize: 22 }}
            />
            <Typography sx={{ fontSize: 16 }}>{text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Login Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          maxWidth: 420,
          p: 4,
          backgroundColor: "#ffffffdd",
          borderRadius: 4,
          boxShadow: 4,
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, mb: 3, color: "#2e7d32" }}
        >
          Welcome Back 👋
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleChange}
          error={Boolean(errors.email_err)}
          helperText={errors.email_err}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={passwordVisible ? "text" : "password"}
          value={loginData.password}
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
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            fontWeight: 700,
            py: 1.5,
            borderRadius: 3,
            background: "linear-gradient(to right, #43a047, #1976d2)",
          }}
        >
          Login
        </Button>

        <Divider sx={{ my: 3, fontWeight: 600, color: "#666" }}>OR</Divider>

        {["Google", "Facebook", "GitHub"].map((provider) => (
          <Button
            key={provider}
            fullWidth
            variant="outlined"
            startIcon={
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${provider.toLowerCase()}/${provider.toLowerCase()}-original.svg`}
                alt={provider}
                style={{ width: 24, height: 24 }}
              />
            }
            sx={{
              mb: 1.5,
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#fafafa",
              borderRadius: 3,
              "&:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
          >
            Continue with {provider}
          </Button>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="body2">Don't have an account?</Typography>
          <Button
            href="/signup"
            sx={{ ml: 1, textTransform: "none", color: "#1976d2" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
