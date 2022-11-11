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
import { toast } from "react-toastify";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const onSubmitClick = () => {
    toast.info(
      "This form currently doesn't work, please contact me through GitHub or links given in the footer :)"
    );
  };

  return (
    <section className={classes.contactSection}>
      <Container>
        <Grid container alignItems="center">
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
                multiline
                name="message"
                id="message"
                label="Message"
                rows={5}
                fullWidth
              />
            </div>
            <div className={classes.button}>
              <Button
                variant="contained"
                size="large"
                color="info"
                onClick={onSubmitClick}
                sx={{
                  borderRadius: "2rem",
                  margin: "1rem auto",
                }}
              >
                Send
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
