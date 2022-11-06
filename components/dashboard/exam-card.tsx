import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { AssignedExam } from "../../models/exam-models";
import classes from "./exam-card.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import moment, { monthsShort } from "moment";

interface ExamCardProps {
  exam: AssignedExam;
}

interface ExamCardRowProps {
  children: React.ReactNode;
}

const ExamCardRow: React.FC<ExamCardRowProps> = ({ children }) => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        alignContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item sx={{ backgroundColor: "cyan", padding: 0 }}>
          {children[0]}
        </Grid>
        <Grid item sx={{ backgroundColor: "lime", padding: 0 }}>
          {children[1]}
        </Grid>
      </Grid>
    </Grid>
  );
};

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  const startDate = new Date(exam.startDate);
  const endDate = new Date(exam.endDate);

  const startDateFormatted = moment(startDate).format("lll");
  const endDateFormatted = moment(endDate).format("lll");
  const duration = moment.duration(exam.duration, "seconds").as("minutes");

  return (
    <div>
      <Card>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, marginBottom: "12px" }}
            color="text.secondary"
            gutterBottom
          >
            {exam?.name}
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              >
                <span className={classes.examDateSpan}>
                  {startDateFormatted}
                </span>
                <span className={classes.examDateSpan}>
                  {/* <ArrowForwardIcon /> */}→
                </span>
                <span className={classes.examDateSpan}>{endDateFormatted}</span>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <TimelapseIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${duration} Minutes`}
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${exam.questionCount} Questions`}
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItem>
          </List>
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
