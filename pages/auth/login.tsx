import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import LoginForm from "../../components/auth/login-form";

const LoginPage = () => {
  return (
    <div>
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
