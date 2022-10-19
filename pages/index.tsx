import exp from "constants";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../hooks";

interface HomePageProps {}

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/auth/login";
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Anti-Cheat Exam App</h1>
      <h3>Langing Page</h3>
    </div>
  );
};

export default HomePage;
