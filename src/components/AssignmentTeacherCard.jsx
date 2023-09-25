/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";

export function TeacherAssignmentCard ({ teacherAssignmentData }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        mt: 5,
        cursor: "pointer",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                user_assignment ID: {teacherAssignmentData.id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Assignment_id: {teacherAssignmentData.assignment_id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                user_id: {teacherAssignmentData.user_id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Student work: {teacherAssignmentData.work}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Date submitted: {teacherAssignmentData.submit_date}
              </Typography>
              <Typography variant="body2">
                Mark: {teacherAssignmentData.mark}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <SchoolIcon />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};