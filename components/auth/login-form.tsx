import { Button, Grid, TextField } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { getUser } from "../../helpers/api/user-api";
import { useAppDispatch } from "../../hooks";
import { userActions } from "../../store/user-store";
import classes from "./login-form.module.scss";

const LoginForm = () => {
  const dispatch = useAppDispatch();

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLodading(true);

    try {
      const user = await getUser(id, password);

      dispatch(userActions.setUser(user));

      window.location.href = "/dashboard";
      // TODO: save user to localStorage
    } catch (e) {
      console.log(e);
    } finally {
      setLodading(false);
    }
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
      </Grid>
    </div>
  );
};

export default LoginForm;
