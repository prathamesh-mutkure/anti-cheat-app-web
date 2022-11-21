import { GetStaticProps } from "next";
import Contact from "../components/home/contact";
import Features from "../components/home/features";
import Footer from "../components/home/footer";
import Hero from "../components/home/Lol";
import NavBarHome from "../components/home/navbar-home";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
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

const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {},
  };
};

export default HomePage;
export { getStaticProps };
