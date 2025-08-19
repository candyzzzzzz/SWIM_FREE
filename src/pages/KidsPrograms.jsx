import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const KidsPrograms = () => (
  <Box sx={{ p: 4, mt: 8, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700, color: "#1976d2", mb: 2 }}>
      Kids Programs
    </Typography>
    <Typography variant="body1" sx={{ color: "#555" }}>
      Discover our fun and safe swimming programs designed specifically for
      kids.
    </Typography>
  </Box>
);

export default KidsPrograms;
