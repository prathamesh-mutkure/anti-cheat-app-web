import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { AssignedExam } from "../../models/exam-models";
import styles from "./exam-card.module.scss";

interface ExamCardProps {
  exam: AssignedExam;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {exam?.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/exam/${exam._id}`}>
            <Button size="small">Start Exam</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ExamCard;
