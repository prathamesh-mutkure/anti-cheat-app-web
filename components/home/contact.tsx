import React from "react";
import { useAppSelector } from "../../hooks";
import { useTimer } from "react-timer-hook";
import classes from "./home.module.scss";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className={classes.contactSection}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <img
              src="https://demo.bootstraptemple.com/app-landing/img/objects.e4497cfa.svg"
              alt="Contact Us"
            />
          </Grid>
          <Grid item xs={6} className={classes.form}>
            <h1>Contact Us</h1>
            <div className={classes.formFields}>
              <TextField name="name" id="name" label="Name" fullWidth />
              <TextField name="email" id="email" label="Email" fullWidth />
              <TextField
                name="message"
                id="message"
                label="Message"
                rows={5}
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
