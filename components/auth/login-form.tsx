import { Button, Grid, TextField } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";
import { getUser } from "../../helpers/api/user-api";
import { useAppDispatch } from "../../hooks";
import { userActions } from "../../store/user-store";
import classes from "./login-form.module.scss";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useAppDispatch();
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

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setLodading(true);

    // TODO: form validation

    try {
      // const user = await getUser(id, password);
      // dispatch(userActions.setUser(user));

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

  const handleLogout = () => {
    signOut({ redirect: false });
  };

  return (
    <div className={classes.form}>
      <h1>Anti-Cheat Exam App</h1>

      <Grid direction="column" container>
        <TextField
          name="id"
          value={id}
          label="ID"
          onChange={handleInputChange}
          type="text"
        />
        <TextField
          name="password"
          value={password}
          label="Password"
          onChange={handleInputChange}
          type="password"
        />

        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Grid>
    </div>
  );
};

export default LoginForm;
