/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";

export const StudentAssignmentsCard = ({ assignmentData }) => {
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
                {assignmentData.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {assignmentData.body}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {assignmentData.created_at}
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
