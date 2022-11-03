import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
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
