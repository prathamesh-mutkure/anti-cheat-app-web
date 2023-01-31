import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import LoginForm from "../../components/auth/login-form";
import NavBarHome from "../../components/home/navbar-home";

const LoginPage: React.FC = () => {
  const loadingBarRef = useRef<LoadingBarRef>(null);

  return (
    <div>
      <Head>
        <title>Anti-Cheat Exam App Login</title>
      </Head>

      <LoadingBar color="#1665C0" ref={loadingBarRef} />

      <NavBarHome loadingBarRef={loadingBarRef} />
      <LoginForm loadingBarRef={loadingBarRef} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return { props: {} };
  }

  return {
    redirect: { destination: "/dashboard", permanent: false },
  };
};

export default LoginPage;
export { getServerSideProps };
