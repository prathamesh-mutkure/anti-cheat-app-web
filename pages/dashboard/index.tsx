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
}

const DashboardPage: React.FC<DashboardPageProps> = ({ exams }) => {
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

  return (
    <div>
      <Dashboard />
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  // TODO: Pass user and token here
  // Handle any potential error
  const assignedExams: AssignedExam[] = await getAssignedExams("1800760308");

  return {
    props: {
      exams: assignedExams,
    },
  };
};

export default DashboardPage;
export { getServerSideProps };
