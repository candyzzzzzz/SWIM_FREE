import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImg from "../images/hero.jpg";

const HeroSection = () => (
  <Box
    sx={{
      width: "100%",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "#e0f7fa",
      p: 0,
    }}
  >
    <Box
      component="img"
      src={heroImg}
      alt="Swim Free Hero"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
        opacity: 0.45,
      }}
    />
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#1976d2",
          mb: 2,
          fontFamily: '"Pacifico", "Comic Sans MS", cursive',
          letterSpacing: 2,
          textShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        Welcome to Swim Free
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#333",
          mb: 4,
          maxWidth: 600,
          fontFamily: '"Montserrat", "Comic Sans MS", cursive',
          fontWeight: 500,
          letterSpacing: 1,
          textShadow: "0 1px 4px rgba(255,255,255,0.2)",
        }}
      >
        Dive into a world of swimming excellence. Join us to improve your
        skills, connect with a community, and enjoy the water like never before.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          px: 5,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1.2rem",
          borderRadius: 3,
          fontFamily: '"Montserrat", "Comic Sans MS", cursive',
          letterSpacing: 1,
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.15)",
        }}
      >
        Get Started
      </Button>
    </Box>
  </Box>
);

export default HeroSection;
