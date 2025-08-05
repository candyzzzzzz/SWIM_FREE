import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgImage from "../images/newsletter.jpg";

const Newsletter = () => (
  <Box
    sx={{
      width: "100%",
      py: 8,
      background: `linear-gradient(rgba(245,250,253,0.92), rgba(245,250,253,0.92)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center",
      boxShadow: 3,
      borderRadius: 2,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: "center",
      px: { xs: 2, md: 4 },
      gap: { xs: 4, md: 0 },
    }}
  >
    <Box sx={{ flex: 1, textAlign: { xs: "center", md: "center" } }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontFamily: '"Pacifico", "Comic Sans MS", cursive',
        }}
      >
        Subscribe to Our Newsletter
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          mb: 3,
          fontFamily: '"Montserrat", "Comic Sans MS", cursive',
        }}
      >
        Stay updated with the latest news and offers.
      </Typography>
    </Box>
    <Box sx={{ flex: 1, textAlign: { xs: "center", md: "right" } }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          background: "#fff",
          borderRadius: 1,
          boxShadow: 1,
          p: 1,
          maxWidth: 800,
          margin: { xs: "0 auto", md: 0 },
        }}
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          size="small"
          sx={{ flexGrow: 1, mr: { sm: 2, xs: 0 }, mb: { xs: 2, sm: 0 } }}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ minWidth: 120, fontWeight: 700 }}
          type="submit"
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Newsletter;
