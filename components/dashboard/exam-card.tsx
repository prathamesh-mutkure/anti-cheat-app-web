import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { AssignedExam } from "../../models/exam-models";
import styles from "./exam-card.module.scss";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

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

          <Grid container direction="row">
            <Grid item>
              <DateRangeIcon />
            </Grid>
            <Grid item>{}</Grid>
          </Grid>
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
