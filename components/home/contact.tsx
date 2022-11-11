import React from "react";
import classes from "./home.module.scss";
import { Button, Container, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import Image from "next/image";

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
            <Image
              src="/images/contact_img.svg"
              width="325px"
              height="287px"
              alt="Contact Image"
            />
          </Grid>
          <Grid item xs={6} className={classes.form}>
            <h1>Contact Us</h1>
            <div className={classes.formFields}>
              <TextField name="name" id="name" label="Name" fullWidth />
              <TextField
                name="email"
                id="email"
                label="Email"
                fullWidth
                type="email"
              />
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
