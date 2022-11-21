import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import classes from "./login-form.module.scss";
import { toast } from "react-toastify";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import { LoadingBarRef } from "react-top-loading-bar";

interface LoginFormProps {
  loadingBarRef: React.RefObject<LoadingBarRef>;
}

const LoginForm: React.FC<LoginFormProps> = ({ loadingBarRef }) => {
  const router = useRouter();

  const [formData, setData] = useState({
    id: "1800760308",
    password: "12345678",
  });

  const [errors, setErrors] = useState({
    idError: "",
    passwordError: "",
  });

  const [loading, setLoading] = useState(false);

  const { id, password } = formData;
  const { idError, passwordError } = errors;

  const handleInputChange = (e: any) => {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setData(newData);
    validateInputs(newData.id, newData.password);
  };

  const validateInputs = (id: string, password: string) => {
    const idRegex = /^\d{10}$/;
    const passwordRegex = /^.{8,}$/;

    const isIdValid = idRegex.test(id);
    const isPasswordValid = passwordRegex.test(password);

    setErrors({
      idError: isIdValid ? "" : "ID must be a 10 digit number",
      passwordError: isPasswordValid
        ? ""
        : "Password must be atleast 8 character long",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || idError !== "" || passwordError != "") {
      return;
    }

    setLoading(true);
    loadingBarRef?.current?.continuousStart(50);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        id: id,
        password: password,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      if (result.ok) {
        router.replace("/dashboard");
      }
    } catch (e) {
      // TODO: Fix login toast error message

      console.log(e);
      toast(e.message || "Login failed, please try again!");
      setLoading(false);
      loadingBarRef?.current?.complete();
    } finally {
      // setLoading(false);
      loadingBarRef?.current?.complete();
    }
  };

  return (
    <React.Fragment>
      <div className={classes.formContainer}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid rgba(0, 0, 0, 0.23) 1px",
              borderRadius: "0.4rem",
              padding: "3rem",
            }}
          >
            <Avatar
              sx={{
                height: "5rem",
                width: "5rem",
                mb: 3,
              }}
            >
              <Image
                src="/images/logo.png"
                height="128px"
                width="128px"
                alt="Logo"
              />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
              Anti-Cheat Exam App
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                name="id"
                id="id"
                value={id}
                label="ID"
                onChange={handleInputChange}
                type="text"
                margin="normal"
                required
                fullWidth
                autoFocus
                error={idError != ""}
                helperText={idError}
              />

              <TextField
                name="password"
                id="password"
                value={password}
                label="Password"
                onChange={handleInputChange}
                type="password"
                margin="normal"
                required
                fullWidth
                autoComplete="current-password"
                error={passwordError != ""}
                helperText={passwordError}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                disabled={loading || idError != "" || passwordError != ""}
              >
                Sign In
              </Button>
            </Box>
          </Box>

          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </div>
      {/* <div className={classes.footerContainer}>
        <Footer />
      </div> */}
    </React.Fragment>
  );
};

export default LoginForm;
