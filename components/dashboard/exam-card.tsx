import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
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
import { Stack } from "@mui/system";
import { LoadingBarRef } from "react-top-loading-bar";

// TODO: Disable button for past or future exam

interface ExamCardProps {
  exam: AssignedExam;
  loadingBarRef: React.RefObject<LoadingBarRef>;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, loadingBarRef }) => {
  const startDate = new Date(exam.startDate);
  const endDate = new Date(exam.endDate);

  const startDateFormatted = moment(startDate).format("lll");
  const endDateFormatted = moment(endDate).format("lll");
  const duration = moment.duration(exam.duration, "seconds").as("minutes");

  return (
    <div>
      <Card
        sx={{
          boxShadow: "none",
          outline: "solid #eeeeee 2px",
        }}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{ fontSize: 14, marginBottom: "12px" }}
              color="text.secondary"
              gutterBottom
            >
              {exam?.name}
            </Typography>

            <Typography
              sx={{ fontSize: 14, marginBottom: "12px" }}
              color="text.secondary"
              gutterBottom
            >
              ID: {exam?._id}
            </Typography>
          </Stack>

          <Divider />

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
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                mb: 1,
              }}
              onClick={() => {
                console.log("LOL");

                loadingBarRef.current.continuousStart(50);
              }}
            >
              Start Exam
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ExamCard;
