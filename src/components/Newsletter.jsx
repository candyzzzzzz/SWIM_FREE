import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Newsletter = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center",
      py: { xs: 4, md: 6 },
      background: "#fff",
      gap: { xs: 2, md: 6 },
      px: 2,
    }}
  >
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        fontFamily: 'Montserrat, "Comic Sans MS", cursive',
        letterSpacing: 1,
        textAlign: { xs: "center", md: "left" },
        mb: { xs: 2, md: 0 },
        minWidth: 320,
      }}
    >
      FREE VIDEOS, TIPS & WORKOUTS
    </Typography>
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        background: "#f6f6f6",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: 1,
        minWidth: { xs: 260, sm: 400, md: 500 },
        width: { xs: "100%", sm: "auto" },
      }}
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField
        variant="standard"
        placeholder="NAME"
        InputProps={{
          disableUnderline: true,
          sx: {
            px: 2,
            py: 1.5,
            fontFamily: 'Montserrat, "Comic Sans MS", cursive',
            fontSize: 18,
            background: "#f6f6f6",
            borderRight: { sm: "1px solid #eee" },
            minWidth: 120,
          },
        }}
        sx={{ flex: 1, minWidth: 100 }}
      />
      <TextField
        variant="standard"
        placeholder="EMAIL ADDRESS"
        type="email"
        InputProps={{
          disableUnderline: true,
          sx: {
            px: 2,
            py: 1.5,
            fontFamily: 'Montserrat, "Comic Sans MS", cursive',
            fontSize: 18,
            background: "#f6f6f6",
            minWidth: 180,
          },
        }}
        sx={{ flex: 2, minWidth: 160 }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          px: 4,
          py: 2,
          fontWeight: 700,
          fontFamily: 'Montserrat, "Comic Sans MS", cursive',
          fontSize: 20,
          background: "#000",
          color: "#fff",
          borderRadius: 0,
          boxShadow: "none",
          "&:hover": { background: "#222" },
        }}
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        SUBSCRIBE
      </Button>
    </Box>
  </Box>
);

export default Newsletter;
