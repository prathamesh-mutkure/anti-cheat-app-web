import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import LoginForm from "../../components/auth/login-form";
import NavBarHome from "../../components/home/NavBarHome";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Anti-Cheat Exam App Login</title>
      </Head>
      <NavBarHome />
      <LoginForm />
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
