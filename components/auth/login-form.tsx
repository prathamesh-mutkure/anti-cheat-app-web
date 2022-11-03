import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import classes from "./login-form.module.scss";
import { toast } from "react-toastify";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Anti-Cheat Exam App
      </Link>
      {" - "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const LoginForm = () => {
  const router = useRouter();

  const [formData, setData] = useState({
    id: "1800760308",
    password: "12345678",
  });

  const { id, password } = formData;

  const [lodading, setLodading] = useState(false);

  const handleInputChange = (e: any) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lodading) {
      return;
    }

    setLodading(true);

    // TODO: form validation

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
      console.log(e);
      toast(e.message || "Login failed, please try again!");

      // TODO: Fix login error message
    } finally {
      setLodading(false);
    }
  };

  const validateInputs = () => {};

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
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
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
};

export default LoginForm;
