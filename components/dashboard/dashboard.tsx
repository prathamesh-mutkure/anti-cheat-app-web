import { Container } from "@mui/material";
import { GetServerSideProps } from "next";
import { getAssignedExams } from "../../helpers/api/exam-api";
import { useAppSelector } from "../../hooks";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const assignedExams = useAppSelector((state) => state.exam.assignedExams);

  console.log(assignedExams);

  return (
    <Container maxWidth="md">
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
