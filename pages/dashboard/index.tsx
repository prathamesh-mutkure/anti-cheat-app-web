import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/dashboard";
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

  const session = useSession();

  useEffect(() => {
    console.log(session.data);
  }, [session]);

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
      <Dashboard />
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
      "1800760308",
      session.user.token
    );

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
