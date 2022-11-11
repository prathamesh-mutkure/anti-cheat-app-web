import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./home.module.scss";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

interface FeaturesProps {}

const featureList = [
  {
    icon: "",
    title: "AI Face Detection",
    content:
      "We used AI and ML to detect cheating by tracking student’s facial movements",
  },
  {
    icon: "",
    title: "Cross Platform",
    content: "This platform is availabe on Web, Android and iOS",
  },
  {
    icon: "",
    title: "Blocks Screen Capture",
    content: "The mobile version of the app blocks any form of screen capture",
  },
  {
    icon: "",
    title: "Blocks App Exit",
    content: "The user cannot exit the app or the website during exam",
  },
  {
    icon: "",
    title: "Assesment and Auditing",
    content: "Support for instant assessment and auditing",
  },
  {
    icon: "",
    title: "Video Proctoring",
    content: "Support for live video proctoring (future support)",
  },
  {
    icon: "",
    title: "Live Communication",
    content: "Live real time communication with user (future support)",
  },
];

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className={classes.featureSection}>
      <Container>
        <h1>Features</h1>

        <Grid
          container
          rowSpacing={5}
          columnSpacing={5}
          justifyContent="center"
        >
          {featureList.map((feature, i) => {
            return (
              <Grid item key={i}>
                <Card
                  sx={{
                    maxWidth: "320px",
                    backgroundColor: "white",
                    borderRadius: "0.85rem",
                    boxShadow: "0 5px 25px rgb(0 0 0 / 8%)",
                    padding: "1rem",
                  }}
                >
                  <CardMedia
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <TrackChangesIcon />
                  </CardMedia>

                  <CardContent>
                    <h3>{feature.title}</h3>
                    <p>{feature.content}</p>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
