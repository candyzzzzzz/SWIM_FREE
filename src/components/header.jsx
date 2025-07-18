import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MdPool, MdCheckCircle, MdClose } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import HideScrollbar from "./HideScrollbar";

const pages = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [anchorElServices, setAnchorElServices] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const handleSignUpOpen = () => {
    setOpenLogin(false);
    setOpenSignUp(true);
  };
  const handleSignUpClose = () => setOpenSignUp(false);

  const handleServicesOpen = (event) =>
    setAnchorElServices(event.currentTarget);
  const handleServicesClose = () => setAnchorElServices(null);
  const openServices = Boolean(anchorElServices);

  return (
    <>
      <HideScrollbar />
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Logo/Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
              fontFamily: '"Pacifico", "Comic Sans MS", cursive', // Unique font
              letterSpacing: 2,
              fontWeight: 700,
              fontSize: { xs: 22, md: 28 },
            }}
          >
            <MdPool
              style={{ marginRight: 8, fontSize: 28, verticalAlign: "middle" }}
            />
            Swim Free
          </Typography>
          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page === "Services" ? (
                <Box key={page}>
                  <Button
                    sx={{
                      color: "#fff",
                      marginLeft: 2,
                      transition: "background 0.2s, color 0.2s",
                      fontFamily: '"Montserrat", "Comic Sans MS", cursive', // Unique font
                      fontWeight: 600,
                      letterSpacing: 1,
                      "&:hover": {
                        background: "#fff",
                        color: "#1976d2",
                      },
                    }}
                    aria-owns={openServices ? "mega-menu-popover" : undefined}
                    aria-haspopup="true"
                    onClick={handleServicesOpen}
                  >
                    {page}
                  </Button>
                  <Popover
                    id="mega-menu-popover"
                    open={openServices}
                    anchorEl={anchorElServices}
                    onClose={handleServicesClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    PaperProps={{
                      sx: {
                        p: 3,
                        minWidth: 180,
                        width: "auto", // Let width grow with content
                        maxWidth: 300, // Prevent it from being too wide
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        background: "#f5fafd",
                        mt: 2, // Add margin-top to shift popover downwards
                      },
                    }}
                    disableRestoreFocus
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1 }}
                      // No mouse events here
                    >
                      Services
                    </Typography>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Beginner Classes
                    </Button>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Advanced Coaching
                    </Button>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Kids Programs
                    </Button>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Pool Booking
                    </Button>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Private Lessons
                    </Button>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", color: "#1976d2" }}
                    >
                      Events & Camps
                    </Button>
                  </Popover>
                </Box>
              ) : (
                <Button
                  key={page}
                  sx={{
                    color: "#fff",
                    marginLeft: 2,
                    transition: "background 0.2s, color 0.2s",
                    fontFamily: '"Montserrat", "Comic Sans MS", cursive', // Unique font
                    fontWeight: 600,
                    letterSpacing: 1,
                    "&:hover": {
                      background: "#fff",
                      color: "#1976d2",
                    },
                  }}
                >
                  {page}
                </Button>
              )
            )}
            {/* Auth Buttons */}
            <Button
              sx={{
                color: "#fff",
                marginLeft: 4,
                border: "1px solid #fff",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
              onClick={handleLoginOpen}
            >
              Login
            </Button>
            <Button
              sx={{
                color: "#1976d2",
                background: "#fff",
                marginLeft: 2,
                fontWeight: 600,
                textTransform: "uppercase",
                "&:hover": { background: "#e3f2fd" },
              }}
              onClick={handleSignUpOpen}
            >
              Sign Up
            </Button>
          </Box>
          {/* Mobile Nav */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* Login Dialog */}
        <Dialog
          open={openLogin}
          onClose={handleLoginClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              minWidth: { xs: 340, sm: 600, md: 800 },
              background: "#181c22",
              color: "#fff",
            },
          }}
        >
          <DialogTitle
            sx={{
              fontWeight: 700,
              fontSize: 28,
              color: "#1976d2",
              fontFamily: 'Montserrat, "Comic Sans MS", cursive',
              letterSpacing: 1,
              background: "transparent",
              pb: 0,
              pr: 5,
              position: "relative",
              textAlign: "center",
            }}
          >
            Login
            <Button
              onClick={handleLoginClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                minWidth: 0,
                p: 0.5,
                color: "#1976d2",
                background: "transparent",
                borderRadius: "50%",
                boxShadow: 1,
                zIndex: 2,
                "&:hover": { background: "#e3f2fd" },
              }}
              aria-label="close"
            >
              <MdClose style={{ fontSize: 24 }} />
            </Button>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              py: 4,
              mt: 3,
              background: "transparent",
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
                background:
                  "linear-gradient(135deg, #e3f2fd 60%, #b2ebf2 100%)",
                borderRadius: 3,
                p: { xs: 2.5, md: 4 },
                mb: { xs: 3, md: 0 },
                minWidth: 260,
                maxWidth: 340,
                boxShadow: "0 4px 18px 0 rgba(25, 118, 210, 0.13)",
                border: "2px solid #1976d2",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: "#1976d2",
                  mb: 1,
                  fontFamily: 'Montserrat, "Comic Sans MS", cursive',
                  letterSpacing: 1,
                  textShadow: "0 2px 8px #b2ebf2",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                TRAIN LIKE A PRO
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1976d2",
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
                  color: "#1976d2",
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
                    style={{ color: "#1976d2", fontSize: 22, marginRight: 8 }}
                  />
                  Training plans
                </Box>
                <Box
                  component="li"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <MdCheckCircle
                    style={{ color: "#1976d2", fontSize: 22, marginRight: 8 }}
                  />
                  Technique improvement courses
                </Box>
                <Box
                  component="li"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <MdCheckCircle
                    style={{ color: "#1976d2", fontSize: 22, marginRight: 8 }}
                  />
                  100+ instruction videos
                </Box>
                <Box
                  component="li"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <MdCheckCircle
                    style={{ color: "#1976d2", fontSize: 22, marginRight: 8 }}
                  />
                  Workout finder and collections
                </Box>
              </Box>
            </Box>
            {/* Login Form Section */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 260,
              }}
            >
              <TextField
                autoFocus
                margin="dense"
                label="User Name"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ mb: 2, background: "#fff", borderRadius: 1 }}
                InputLabelProps={{
                  style: { color: "#1976d2", fontWeight: 600 },
                }}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                sx={{ background: "#fff", borderRadius: 1 }}
                InputLabelProps={{
                  style: { color: "#1976d2", fontWeight: 600 },
                }}
              />
              <DialogActions
                sx={{
                  flexDirection: "column",
                  alignItems: "stretch",
                  px: 0,
                  pb: 0,
                  width: "100%",
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    fontSize: 18,
                    py: 1.2,
                    borderRadius: 2,
                  }}
                >
                  Login
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="body2" sx={{ mr: 1, color: "#fff" }}>
                    Don't you have an account..?
                  </Typography>
                  <Button
                    onClick={handleSignUpOpen}
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
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
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
      </AppBar>
      {/* End AppBar */}
    </>
  );
};

export default Header;
