import { signOut } from "next-auth/react";
import Contact from "../components/home/contact";
import Features from "../components/home/features";
import Footer from "../components/home/footer";
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
      <Footer />
    </>
  );
};

export default HomePage;
