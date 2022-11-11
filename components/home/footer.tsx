import React from "react";
import { useAppSelector } from "../../hooks";
import { useTimer } from "react-timer-hook";
import classes from "./footer.module.scss";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LoginIcon from "@mui/icons-material/Login";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface FooterProps {}

const footerLinks = [
  {
    label: "GitHub",
    link: "https://github.com/prathamesh-mutkure/anti-cheat-app-web",
  },
  {
    label: "Mobile",
    link: "https://github.com/prathamesh-mutkure/anti-cheat-exam-app",
  },
  {
    label: "Home",
    link: "/",
  },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={classes.footer}>
      <footer>
        <Container className={classes.items}>
          <Grid container justifyContent="space-evenly" rowSpacing={5}>
            {footerLinks.map((link, i) => (
              <Link href={link.link} key={i}>
                <Grid item>
                  <h3>{link.label}</h3>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Container>

        <div className={classes.copyright}>
          <p>
            Developed by{" "}
            <a href="https://prathamesh.co" target="_blank" rel="noreferrer">
              Prathamesh Mutkure
            </a>{" "}
            &#169; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
