import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const classes = [
  {
    id: 1,
    title: "Water Confidence",
    desc: "Helps beginners overcome fear of water with safe guidance.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    id: 2,
    title: "Floating Skills",
    desc: "Master balance and floating to build confidence in deep water.",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    id: 3,
    title: "Group Practice",
    desc: "Engage with fellow learners in fun group practice sessions.",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
];

export default function BeginnerClasses() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Box sx={{ py: 8, backgroundColor: "#E3F2FD" }} id="beginner-classes">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="primary"
          fontWeight="bold"
        >
          Beginner Swimming Classes
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Start your swimming journey with confidence! Our beginner classes
          focus on water safety, essential skills, and building trust in the
          pool.
        </Typography>
      </motion.div>

      {/* Classes Grid */}
      <Grid container spacing={4} justifyContent="center">
        {classes.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                }}
                onClick={() => setSelectedImg(item.img)}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
      <Dialog
        open={Boolean(selectedImg)}
        onClose={() => setSelectedImg(null)}
        maxWidth="md"
      >
        <Box sx={{ position: "relative", bgcolor: "black" }}>
          <IconButton
            onClick={() => setSelectedImg(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          {selectedImg && (
            <motion.img
              src={selectedImg}
              alt="Selected"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                maxHeight: "80vh",
                maxWidth: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
