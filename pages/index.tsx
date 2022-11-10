import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Contact from "../components/home/contact";
import Features from "../components/home/features";
import Hero from "../components/home/Hero";
import NavBarHome from "../components/home/NavBarHome";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const handleLogout = () => {
    signOut({ redirect: false });
  };

  return (
    <>
      <NavBarHome />
      <Hero />
      <Features />
      <Contact />
    </>
  );
};

export default HomePage;
