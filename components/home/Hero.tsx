import React from "react";
import { useAppSelector } from "../../hooks";
import { useTimer } from "react-timer-hook";
import classes from "./home.module.scss";
import { Button, Container, Stack, Typography } from "@mui/material";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <React.Fragment>
      <section className={classes.heroSection}>
        <h1>Anti-Cheat Exam App</h1>

        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column">
              <h1>Online Exams, Made Fairer</h1>

              <p>AI-enabled cheating detection</p>

              <Stack direction="row">
                <Button variant="contained" size="medium">
                  Mobile App
                </Button>

                <Button variant="contained" size="medium">
                  Login
                </Button>
              </Stack>
            </Stack>

            <div className={classes.phone}>{/* Mobile Screen here */}</div>
          </Stack>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
