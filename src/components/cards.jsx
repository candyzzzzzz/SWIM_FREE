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
import cardImg from "../images/hero.jpg";

const cardData = [
  {
    icon: <PoolIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Beginner Classes",
    text: "Start your swimming journey with our expert-led beginner classes designed for all ages.",
  },
  {
    icon: <SportsKabaddiIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Advanced Coaching",
    text: "Take your skills to the next level with advanced techniques and personalized coaching.",
  },
  {
    icon: <ChildCareIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Kids Programs",
    text: "Fun and safe swimming programs tailored for children to build confidence in water.",
  },
  {
    icon: <EventIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Events & Camps",
    text: "Join our exciting swimming events and camps to connect, compete, and celebrate progress.",
  },
];

const CardsSection = () => (
  <Box sx={{ width: "100%", py: 8, background: "#f5fafd" }}>
    <Container maxWidth="lg">
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
        spacing={{ xs: 3, sm: 4, md: 5 }}
        justifyContent="center"
        sx={{ px: { xs: 1, sm: 2, md: 3 } }}
      >
        {cardData.map((card, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={idx}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                boxShadow: 3,
                minWidth: 0,
                width: "100%",
                maxWidth: 320,
                mx: "auto",
                my: 1.5,
              }}
            >
              {card.icon}
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: '"Montserrat", "Comic Sans MS", cursive',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {card.text}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={cardImg}
                alt="Swimming"
                sx={{
                  width: "100%",
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 2,
                  mt: 2,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default CardsSection;
