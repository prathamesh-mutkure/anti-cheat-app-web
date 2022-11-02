import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
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

  const handleLogout = () => {
    signOut({ redirect: false });
  };

  return (
    <div>
      <h1>Anti-Cheat Exam App</h1>
      <h3>Landing Page</h3>

      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
