import { Card, CardContent, Typography, Button } from "@mui/material";

interface TeacherCardProps {
  name: string;
  subject: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ name, subject }) => (
  <Card style={{ margin: "10px", maxWidth: "300px" }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>{name}</Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>{subject}</Typography>
      <img src="/placeholder.jpg" alt="Teacher" style={{ width: "100%", height: "150px", marginBottom: "10px" }} />
      <Button variant="contained" color="primary" fullWidth>
        Book Class
      </Button>
    </CardContent>
  </Card>
);

export default TeacherCard;
