import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PrivateLessons = () => (
  <Box sx={{ p: 4, mt: 8, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700, color: "#1976d2", mb: 2 }}>
      Private Lessons
    </Typography>
    <Typography variant="body1" sx={{ color: "#555" }}>
      Book a private lesson for personalized coaching and rapid progress in
      swimming.
    </Typography>
  </Box>
);

export default PrivateLessons;
