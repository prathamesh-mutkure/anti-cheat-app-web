import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import classes from "./home.module.scss";
import Image from "next/image";

interface FeaturesProps {}

const featureList = [
  {
    icon: "ai_icon.png",
    title: "AI Face Detection",
    content:
      "Advance AI and ML to detect cheating by tracking student’s facial movements",
  },
  {
    icon: "cross_platform.png",
    title: "Cross Platform",
    content: "This platform is availabe on Web, Android and iOS",
    padding: "12px",
    color: "darkmagenta",
  },
  {
    icon: "phone_lock_icon.png",
    title: "Blocks Screen Capture",
    content: "The mobile version of the app blocks any form of screen capture",
    padding: "12px",
    color: "lightblue",
  },
  {
    icon: "cross_icon.svg",
    title: "Blocks App Exit",
    content: "The user cannot exit the app or change tab during exam",
    padding: "0px",
  },
  {
    icon: "assesment_icon.svg",
    title: "Assesment and Auditing",
    content: "Support for instant assessment and auditing",
    padding: "0px",
  },
  {
    icon: "video_icon.svg",
    color: "#DD7F6B",
    title: "Video Proctoring",
    content: "Support for live video proctoring (future support)",
  },
  {
    icon: "comm_icon.svg",
    title: "Live Communication",
    content:
      "Live real time communication between user and proctor (future support)",
    padding: "12px",
    color: "midnightblue",
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
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <CardMedia>
                    <Avatar
                      sx={{
                        height: "60px",
                        width: "60px",
                        padding: feature.padding ?? "4px",
                        backgroundColor: feature.color,
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src={`/images/icon/${feature.icon}`}
                        height="64px"
                        width="64px"
                        alt="icon"
                      />
                    </Avatar>
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
