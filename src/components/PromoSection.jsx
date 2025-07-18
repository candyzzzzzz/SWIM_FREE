import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import bgImg from "../images/hero.jpg"; // Use your own image path if needed
import promoImg from "../images/card2.JPG"; // Placeholder for the promo image

const PromoSection = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleSignUpOpen = () => setOpenSignUp(true);
  const handleSignUpClose = () => setOpenSignUp(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: 320, md: 340 },
          position: "relative",
          background: `url(${bgImg}) center/cover no-repeat, linear-gradient(90deg, #0d1b2a 0%, #1976d2 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 3, md: 6 },
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,27,42,0.7)", // Deep blue-black overlay
            zIndex: 1,
          }}
        />
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: { xs: 320, md: 340 },
          }}
          maxWidth="lg"
        >
          {/* Promo Image */}
          <Box
            sx={{
              position: "relative",
              zIndex: 4,
              mr: { xs: 2, md: 4 },
              ml: { xs: 0, md: 8 },
            }}
          >
            <Box
              component="img"
              src={promoImg}
              alt="Train Like a Pro"
              sx={{
                width: { xs: 120, md: 180 },
                height: { xs: 80, md: 120 },
                borderRadius: 2,
                boxShadow: 3,
                border: "3px solid #1976d2",
                background: "#fff",
              }}
            />
            <Box
              component="img"
              src={promoImg}
              alt="App Preview"
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 80, md: 120 },
                borderRadius: 2,
                boxShadow: 3,
                border: "3px solid #1976d2",
                background: "#fff",
                position: "absolute",
                left: { xs: 90, md: 140 },
                top: { xs: 20, md: 30 },
              }}
            />
          </Box>
          {/* Text Content */}
          <Box
            sx={{
              color: "#fff",
              ml: { xs: 2, md: 6 },
              zIndex: 4,
              maxWidth: 400,
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#1976d2", fontWeight: 700, letterSpacing: 1 }}
            >
              ONLINE SWIM TRAINING
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                mb: 1,
                mt: 0.5,
                letterSpacing: 1,
                color: "#fff",
              }}
            >
              START TODAY
            </Typography>
            <Box
              component="ul"
              sx={{ pl: 2, mb: 2, fontSize: 16, lineHeight: 1.6 }}
            >
              <li>Training plans to achieve your goals</li>
              <li>
                Step-by-step technique <b>improvement courses</b>
              </li>
              <li>100+ high quality instruction videos</li>
              <li>Workout finder and workout collections</li>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                color: "#1976d2",
                background: "#fff",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: 18,
                borderRadius: 2,
                marginTop: 2,
                marginBottom: 2,
                boxShadow: 2,
                transition: "background 0.2s, color 0.2s",
                "&:hover": {
                  background: "#e3f2fd",
                },
              }}
              onClick={handleSignUpOpen}
            >
              Sign Up
            </Button>
            {/* Sign Up Dialog */}
            <Dialog
              open={openSignUp}
              onClose={handleSignUpClose}
              maxWidth="xs"
              fullWidth
            >
              <DialogTitle>Sign Up</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="User Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="dense"
                  label="Phone Number"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="dense"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                />
              </DialogContent>
              <DialogActions
                sx={{
                  flexDirection: "column",
                  alignItems: "stretch",
                  px: 3,
                  pb: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={handleSignUpClose}
                  fullWidth
                  sx={{ color: "#1976d2" }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PromoSection;
