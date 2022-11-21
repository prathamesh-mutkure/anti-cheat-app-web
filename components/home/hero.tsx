import React from "react";
import classes from "./home.module.scss";
import { Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LoginIcon from "@mui/icons-material/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { LoadingBarRef } from "react-top-loading-bar";

interface HeroProps {
  loadingBarRef: React.RefObject<LoadingBarRef>;
}

const Hero: React.FC<HeroProps> = ({ loadingBarRef }) => {
  const session = useSession();

  const showLoadingWidget = () => {
    loadingBarRef.current.continuousStart(50);
  };

  return (
    <React.Fragment>
      <section className={classes.heroSection}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="start"
          >
            <div className={classes.heroText}>
              <h1>Online exams made fairer</h1>

              <p>
                Detect cheating in online exams with the power of Artificial
                Intelligence & Machine Learning
              </p>

              <Stack direction="row" className={classes.buttonGroup}>
                <Link
                  href="https://github.com/prathamesh-mutkure/anti-cheat-exam-app"
                  target="_blank"
                >
                  <Button
                    startIcon={<GitHubIcon />}
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Mobile App
                  </Button>
                </Link>

                {session.status === "authenticated" ? (
                  <Link href="/dashboard">
                    <Button
                      startIcon={<ArrowOutwardIcon />}
                      variant="contained"
                      size="large"
                      color="primary"
                      onClick={showLoadingWidget}
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <Button
                      startIcon={<LoginIcon />}
                      variant="contained"
                      size="large"
                      color="primary"
                      disabled={session.status === "loading"}
                      onClick={showLoadingWidget}
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </Stack>
            </div>

            <div className={classes.phone}>
              <Image
                src="/images/hero_img.png"
                width="300px"
                height="600px"
                alt="Hero Image"
              />
            </div>
          </Stack>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Hero;
