import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import PoolIcon from "@mui/icons-material/Pool";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import EventIcon from "@mui/icons-material/Event";
import cardImg1 from "../images/card1.jpg";
import cardImg2 from "../images/card2.JPG";
import cardImg3 from "../images/card3.jpg";
import cardImg4 from "../images/card4.jpg";
import PromoSection from "./PromoSection";
import Newsletter from "./Newsletter.jsx";
const cardData = [
  {
    icon: <PoolIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Beginner Classes",
    text: "Start your swimming journey with our expert-led beginner classes designed for all ages.",
    image: cardImg1,
  },
  {
    icon: <SportsKabaddiIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Advanced Coaching",
    text: "Take your skills to the next level with advanced techniques and personalized coaching.",
    image: cardImg2,
  },
  {
    icon: <ChildCareIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Kids Programs",
    text: "Fun and safe swimming programs tailored for children to build confidence in water.",
    image: cardImg3,
  },
  {
    icon: <EventIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Events & Camps",
    text: "Join our exciting swimming events and camps to connect, compete, and celebrate progress.",
    image: cardImg4,
  },
];

const CardsSection = () => (
  <Box sx={{ width: "100%", py: 8, background: "#f5fafd" }}>
    <Container maxWidth={false} sx={{ maxWidth: "1600px", width: "100%" }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: '"Pacifico", "Comic Sans MS", cursive',
          }}
        >
          Dive Into Excellence
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            mb: 3,
            fontFamily: '"Montserrat", "Comic Sans MS", cursive',
          }}
        >
          Discover our range of swimming programs and opportunities for all ages
          and skill levels.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2, px: 4, fontWeight: 600 }}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ px: 4, fontWeight: 600 }}
        >
          Explore
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
        sx={{ px: { xs: 0, sm: 1, md: 2 }, flexWrap: "wrap" }}
      >
        {cardData.map((card, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={idx}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                boxShadow: 3,
                minWidth: 0,
                width: "100%",
                maxWidth: 300,
                minHeight: 270,
                mx: "auto",
                my: 1,
              }}
            >
              {card.icon}
              <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: '"Montserrat", "Comic Sans MS", cursive',
                    fontSize: 18,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: 14 }}
                >
                  {card.text}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
                sx={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  borderRadius: 2,
                  mt: 1,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    {/* Custom Divider with Content */}
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 3, md: 6 }, // Responsive margin top for more visible space
        mb: 0,
        py: 1.5,
        background: "linear-gradient(90deg, #90caf9 0%, #b2ebf2 100%)",
        clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
        boxShadow: "0 1px 6px 0 rgba(25, 118, 210, 0.08)",
        opacity: 0.85,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "#1976d2",
          fontWeight: 700,
          fontFamily: 'Montserrat, "Comic Sans MS", cursive',
          letterSpacing: 1,
          fontSize: { xs: 16, md: 18 },
          textAlign: "center",
          px: 2,
        }}
      >
        🌊 Ready to make a splash? <b>Unleash your inner swimmer</b> and join
        our vibrant community—where every stroke brings you closer to greatness!
      </Typography>
    </Box>
    {/* End Divider */}
    <Box sx={{ height: { xs: 24, md: 40 } }} />
    <PromoSection /> {/* Render the PromoSection component here */}
    <Newsletter />
  </Box>
);

export default CardsSection;
