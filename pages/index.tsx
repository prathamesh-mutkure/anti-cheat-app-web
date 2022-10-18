import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/auth/login";
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
