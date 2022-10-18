import { Button, Grid, TextField } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import classes from "./login-form.module.scss";

const LoginForm = () => {
  const [formData, setData] = useState({
    id: "1800760308",
    password: "12345678",
  });

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
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      // TODO: Call redux methods
      // Store user

      console.log(data);
    } catch (e) {
      console.log(e);
    }

    setLodading(false);
  };

  return (
    <div className={classes.form}>
      <h1>Anti-Cheat Exam App</h1>

      <Grid direction="column" container>
        <TextField
          name="id"
          value={formData.id}
          label="ID"
          onChange={handleInputChange}
        />
        <TextField
          name="password"
          value={formData.password}
          label="Password"
          onChange={handleInputChange}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Grid>
    </div>
  );
};

export default LoginForm;
