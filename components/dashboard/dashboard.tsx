import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks";
import ExamCard from "./exam-card";
import classes from "./dashboard.module.scss";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const assignedExams = useAppSelector((state) => state.exam.assignedExams);
  const name = useAppSelector((state) => state.user.user.fname);

  return (
    <Container maxWidth="md" className={classes.container}>
      <h1 className={classes.title}>Welcome {name}!</h1>

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
