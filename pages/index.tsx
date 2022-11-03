import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import NavBarHome from "../components/home/NavBarHome";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const handleLogout = () => {
    signOut({ redirect: false });
  };

  return (
    <>
      <NavBarHome />
      <h1>Anti-Cheat Exam App</h1>
    </>
  );
};

export default HomePage;
