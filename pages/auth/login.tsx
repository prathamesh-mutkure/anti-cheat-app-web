import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import LoginForm from "../../components/auth/login-form";

const LoginPage = () => {
  // const session = useSession();

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

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
