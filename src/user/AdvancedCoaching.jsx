import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AdvancedCoaching = () => (
  <Box sx={{ p: 4, mt: 8, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700, color: "#1976d2", mb: 2 }}>
      Advanced Coaching
    </Typography>
    <Typography variant="body1" sx={{ color: "#555" }}>
      Explore our Advanced Coaching programs for experienced swimmers looking to
      improve their skills.
    </Typography>
  </Box>
);

export default AdvancedCoaching;
