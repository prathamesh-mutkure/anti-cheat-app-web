import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import LoginForm from "../../components/auth/login-form";
import NavBarHome from "../../components/home/navbar-home";

const LoginPage = () => {
  const loadingBarRef: React.Ref<LoadingBarRef> = useRef(null);

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

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
    props: {
      session: session,
    },
  };
};

export default LoginPage;
export { getServerSideProps };
