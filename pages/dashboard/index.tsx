import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import Dashboard from "../../components/dashboard/dashboard";
import NavBarDashboard from "../../components/dashboard/navbar-dashboard";
import { getAssignedExams } from "../../helpers/api/exam-api";
import { useAppDispatch } from "../../hooks";
import { AssignedExam } from "../../models/exam-models";
import { examActions } from "../../store/exam-store";

interface DashboardPageProps {
  exams: AssignedExam[];
  error: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ exams, error }) => {
  const dispatch = useAppDispatch();
  const loadingBarRef: React.Ref<LoadingBarRef> = useRef(null);

  useEffect(() => {
    if (!exams) {
      return;
    }

    dispatch(examActions.setAssignedExams(exams));
  }, [dispatch, exams]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Head>
        <title>Anti-Cheat Exam App Dashboard</title>
      </Head>
      <LoadingBar color="#ffffff" ref={loadingBarRef} />
      <NavBarDashboard loadingBarRef={loadingBarRef} />
      <Dashboard loadingBarRef={loadingBarRef} />
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  try {
    const assignedExams: AssignedExam[] = await getAssignedExams(
      session.user.id,
      session.user.token
    );

    if (!assignedExams) {
      throw new Error("Error getting assigned exams!");
    }

    return {
      props: {
        exams: assignedExams,
        error: null,
      },
    };
  } catch (e) {
    return {
      props: {
        exams: null,
        error: e.message ?? "Error getting assigned exams!",
      },
    };
  }
};

export default DashboardPage;
export { getServerSideProps };
