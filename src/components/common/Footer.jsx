import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "#000",
      color: "#fff",
      pt: 6,
      pb: 2,
      mt: 6,
      boxShadow: 3,
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-start" },
          gap: 4,
          pb: 3,
          m: 0,
        }}
      >
        {/* Quick Links - Left */}
        <Box
          sx={{
            flex: 1,
            minWidth: 180,
            order: { xs: 2, md: 1 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "flex-start" },
            m: 0,
            p: 0,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Quick Links
            </Typography>
            <Stack
              spacing={0.5}
              alignItems="flex-start"
              justifyContent={"center"}
            >
              <Link href="#" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Workouts
              </Link>
              <Link href="/signup" color="inherit" underline="hover">
                Sign Up
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Box>
        </Box>
        {/* Swim Free - Center */}
        <Box
          sx={{
            flex: 1,
            minWidth: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
            order: { xs: 1, md: 2 },
            m: 0,
            p: 0,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Swim Free
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              textAlign: { xs: "left", md: "center" },
            }}
          >
            Your online destination for swim training plans, technique courses,
            and expert guidance. Dive in and start your journey today!
          </Typography>
        </Box>
        {/* Contact & Social - Right */}
        <Box
          sx={{
            flex: 1,
            minWidth: 200,
            order: { xs: 3, md: 3 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
            m: 0,
            p: 0,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Contact
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1, textAlign: { xs: "left", md: "center" } }}
          >
            Email:{" "}
            <Link
              href="mailto:info@swimfree.com"
              color="inherit"
              underline="hover"
            >
              info@swimfree.com
            </Link>
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <IconButton
              href="#"
              color="inherit"
              aria-label="Facebook"
              size="small"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="#"
              color="inherit"
              aria-label="Twitter"
              size="small"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="#"
              color="inherit"
              aria-label="Instagram"
              size="small"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://github.com/login"
              color="inherit"
              aria-label="GitHub"
              size="small"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="mailto:info@swimfree.com"
              color="inherit"
              aria-label="Email"
              size="small"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #ffffff22",
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Swim Free. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
