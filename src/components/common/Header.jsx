import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { MdPool } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import HideScrollbar from "../HideScrollbar";

const pages = ["Home", "About", "Services", "Contactus"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginOpen = () => navigate("/login");

  const handleSignUpOpen = () => navigate("/signup");
  const handleServicesOpen = (event) =>
    setAnchorElServices(event.currentTarget);
  const handleServicesClose = () => setAnchorElServices(null);
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
            {pages.map((page) => {
              if (page === "Services") {
                return (
                  <Box key={page}>
                    <Button
                      sx={{
                        color: "#fff",
                        marginLeft: 2,
                        transition: "background 0.2s, color 0.2s",
                        fontFamily: '"Montserrat", "Comic Sans MS", cursive',
                        fontWeight: 600,
                        letterSpacing: 1,
                        "&:hover": {
                          background: "#fff",
                          color: "#1976d2",
                        },
                      }}
                      aria-owns={
                        anchorElServices ? "mega-menu-popover" : undefined
                      }
                      aria-haspopup="true"
                      onClick={handleServicesOpen}
                    >
                      {page}
                    </Button>
                    <Popover
                      id="mega-menu-popover"
                      open={anchorElServices}
                      anchorEl={anchorElServices}
                      onClose={handleServicesClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      PaperProps={{
                        sx: {
                          p: 3,
                          minWidth: 180,
                          width: "auto",
                          maxWidth: 300,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          background: "#f5fafd",
                          mt: 2,
                        },
                      }}
                      disableRestoreFocus
                    >
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#1976d2",
                          textDecoration: "none",
                          transition: "text-decoration 0.2s",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => navigate("/beginner-classes")}
                      >
                        Beginner Classes
                      </Button>
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#1976d2",
                          textDecoration: "none",
                          transition: "text-decoration 0.2s",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => navigate("/advanced-coaching")}
                      >
                        Advanced Coaching
                      </Button>
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#1976d2",
                          textDecoration: "none",
                          transition: "text-decoration 0.2s",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => navigate("/kids-programs")}
                      >
                        Kids Programs
                      </Button>
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#1976d2",
                          textDecoration: "none",
                          transition: "text-decoration 0.2s",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => navigate("/private-lessons")}
                      >
                        Private Lessons
                      </Button>
                    </Popover>
                  </Box>
                );
              } else if (page === "Contactus") {
                return (
                  <Button
                    key={page}
                    sx={{
                      color: "#fff",
                      marginLeft: 2,
                      transition: "background 0.2s, color 0.2s",
                      fontFamily: '"Montserrat", "Comic Sans MS", cursive',
                      fontWeight: 600,
                      letterSpacing: 1,
                      "&:hover": {
                        background: "#fff",
                        color: "#1976d2",
                      },
                    }}
                    onClick={() => navigate("/contactus")}
                  >
                    {page}
                  </Button>
                );
              } else {
                return (
                  <Button
                    key={page}
                    sx={{
                      color: "#fff",
                      marginLeft: 2,
                      transition: "background 0.2s, color 0.2s",
                      fontFamily: '"Montserrat", "Comic Sans MS", cursive',
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
                );
              }
            })}
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
      </AppBar>
      {/* End AppBar */}
    </>
  );
};

export default Header;
