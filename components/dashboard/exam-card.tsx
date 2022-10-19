import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

interface ExamCardProps {
  exam: any;
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
          <Button size="small">Start Exam</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ExamCard;
