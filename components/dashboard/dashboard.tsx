import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks";
import ExamCard from "./exam-card";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const assignedExams = useAppSelector((state) => state.exam.assignedExams);

  return (
    <Container maxWidth="md">
      <h1>Dashboard</h1>

      <Grid container direction="column" spacing={4}>
        {assignedExams.map((exam) => (
          <Grid key={exam._id} item>
            <ExamCard exam={exam} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
