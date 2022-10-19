import { Container, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getAssignedExams } from "../../helpers/api/exam-api";
import { useAppSelector } from "../../hooks";
import ExamCard from "./exam-card";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const assignedExams = useAppSelector((state) => state.exam.assignedExams);

  console.log(assignedExams);

  return (
    <Container maxWidth="md">
      <h1>Dashboard</h1>

      <Grid container direction="column" spacing={4}>
        {assignedExams.map((exam, i) => (
          <Grid key={i} item>
            <ExamCard exam={exam} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
