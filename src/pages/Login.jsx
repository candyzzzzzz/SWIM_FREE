import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let err = {};
    for (const key in loginData) {
      if (!loginData[key]) {
        err[key + "_err"] = "Please enter " + key.replace(/_/g, " ");
      } else if (key === "email") {
        if (!checkValidEmail(loginData[key])) {
          err[key + "_err"] = "Invalid email address";
        }
      } else if (key === "password") {
        if (!checkValidPassword(loginData[key])) {
          err[key + "_err"] =
            "Invalid password format (8+ chars, 1 uppercase, 1 lowercase, 1 number)";
        }
      }
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle login logic here
      console.log("Login data submitted:", loginData);
      setLoginData(INITIAL_LOGIN_DATA); // Reset form after submission
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        background: "#f7fafc",
        borderRadius: 4,
        p: { xs: 2.5, md: 5 },
        mb: { xs: 3, md: 0 },
        boxShadow: "0 6px 24px 0 #0002",
        border: "1px solid #e0e0e0",
        gap: { xs: 3, md: 6 },
      }}
    >
      {/* Info Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          background: "#fff",
          borderRadius: 3,
          p: { xs: 2.5, md: 4 },
          mb: { xs: 3, md: 0 },
          minWidth: 260,
          maxWidth: 340,
          boxShadow: "0 2px 12px 0 #0001",
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            color: "#1976d2",
            mb: 1,
            fontFamily: "Arial, sans-serif",
            letterSpacing: 1,
            textShadow: "0 1px 0 #fff",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          TRAIN LIKE A PRO
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#333",
            fontWeight: 600,
            mb: 2,
            fontSize: 16,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          And get full access to:
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 2,
            color: "#444",
            fontSize: 15,
            fontWeight: 500,
            m: 0,
            listStyle: "none",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <MdCheckCircle
              style={{ color: "#43a047", fontSize: 22, marginRight: 8 }}
            />
            Training plans
          </Box>
          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <MdCheckCircle
              style={{ color: "#43a047", fontSize: 22, marginRight: 8 }}
            />
            Technique improvement courses
          </Box>
          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <MdCheckCircle
              style={{ color: "#43a047", fontSize: 22, marginRight: 8 }}
            />
            100+ instruction videos
          </Box>
          <Box component="li" sx={{ display: "flex", alignItems: "center" }}>
            <MdCheckCircle
              style={{ color: "#43a047", fontSize: 22, marginRight: 8 }}
            />
            Workout finder and collections
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 260,
          background: "#fff",
          borderRadius: 3,
          p: { xs: 2.5, md: 4 },
          boxShadow: "0 2px 12px 0 #0001",
          border: "1px solid #e0e0e0",
        }}
      >
        <input
          autoFocus
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{
            width: "100%",
            marginBottom: 6,
            padding: "14px 16px",
            borderRadius: 10,
            border: "1.5px solid #bdbdbd",
            fontSize: 17,
            background: "#f7fafc",
            color: "#222",
            outline: "none",
            boxSizing: "border-box",
            transition: "border 0.2s",
          }}
        />
        {errors.email_err && (
          <Typography
            sx={{ color: "#d32f2f", mb: 1, fontSize: 14, width: "100%" }}
          >
            {errors.email_err}
          </Typography>
        )}
        <Box sx={{ width: "100%", position: "relative", mb: 1 }}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
            style={{
              width: "100%",
              marginBottom: 6,
              padding: "14px 44px 14px 16px",
              borderRadius: 10,
              border: "1.5px solid #bdbdbd",
              fontSize: 17,
              background: "#f7fafc",
              color: "#222",
              outline: "none",
              boxSizing: "border-box",
              transition: "border 0.2s",
            }}
          />
          <Box
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              top: "50%",
              right: 12,
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#888",
              fontSize: 22,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
            }}
            tabIndex={0}
            role="button"
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Box>
        </Box>
        {errors.password_err && (
          <Typography
            sx={{ color: "#d32f2f", mb: 2, fontSize: 14, width: "100%" }}
          >
            {errors.password_err}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          sx={{
            mb: 2,
            fontWeight: 700,
            fontSize: 18,
            py: 1.2,
            borderRadius: 2,
            background: "linear-gradient(90deg, #1976d2 60%, #43a047 100%)",
          }}
        >
          Login
        </Button>
        {/* Divider with 'Or' */}
        <Box
          sx={{ display: "flex", alignItems: "center", my: 2, width: "100%" }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1.5px",
              background: "#e0e0e0",
              borderRadius: 1,
            }}
          />
          <Typography sx={{ mx: 2, color: "#888", fontWeight: 600 }}>
            Or
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: "1.5px",
              background: "#e0e0e0",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Social Login Options */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1.5,
              borderRadius: "999px",
              boxShadow: "0 2px 8px 0 #0002",
              background: "#f5f5f5",
              cursor: "pointer",
              transition: "box-shadow 0.2s, background 0.2s",
              "&:hover": {
                boxShadow: "0 4px 16px 0 #0003",
                background: "#e3f2fd",
              },
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              style={{ width: 28, height: 28, marginRight: 12 }}
            />
            <Typography sx={{ fontWeight: 600, color: "#444" }}>
              Login with Google
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1.5,
              borderRadius: "999px",
              boxShadow: "0 2px 8px 0 #0002",
              background: "#f5f5f5",
              cursor: "pointer",
              transition: "box-shadow 0.2s, background 0.2s",
              "&:hover": {
                boxShadow: "0 4px 16px 0 #0003",
                background: "#e3f2fd",
              },
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              style={{ width: 28, height: 28, marginRight: 12 }}
            />
            <Typography sx={{ fontWeight: 600, color: "#444" }}>
              Login with Facebook
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1.5,
              borderRadius: "999px",
              boxShadow: "0 2px 8px 0 #0002",
              background: "#f5f5f5",
              cursor: "pointer",
              transition: "box-shadow 0.2s, background 0.2s",
              "&:hover": {
                boxShadow: "0 4px 16px 0 #0003",
                background: "#e3f2fd",
              },
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              style={{ width: 28, height: 28, marginRight: 12 }}
            />
            <Typography sx={{ fontWeight: 600, color: "#444" }}>
              Login with GitHub
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 1,
          }}
        >
          <Typography variant="body2" sx={{ mr: 1, color: "#222" }}>
            Don't you have an account..?
          </Typography>
          <Button
            href="/signup"
            sx={{
              fontWeight: 600,
              color: "#1976d2",
              textTransform: "none",
              p: 0,
              minWidth: 0,
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
