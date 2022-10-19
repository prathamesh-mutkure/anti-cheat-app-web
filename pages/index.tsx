import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/home/home";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

const HomePage = () => {
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
      <Home />
      <p>{user?.id}</p>
    </div>
  );
};

export default HomePage;
