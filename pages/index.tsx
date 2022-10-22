import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../hooks";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const user = useAppSelector((state) => state.user.user);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     window.location.href = "/auth/login";
  //   }
  // }, [isLoggedIn]);

  return (
    <div>
      <h1>Anti-Cheat Exam App</h1>
      <h3>Landing Page</h3>

      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default HomePage;
