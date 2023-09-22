import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { deleteAssignmentByAssignmentID } from "../utils/api";

export function TeacherClassClassIDAssignmentsCard ({ teacherClassAssignmentData }) {
    const navigate = useNavigate();
    function handleAssignmentToDisplay(assignment) {
        const student_id = assignment.user_id
        navigate(`/teacher/assignments/student/${student_id}`);
      } 
    
      function handleAssigmenttoDelete(assignment) {
        const assignment_id = assignment.id
        const student_id = assignment.user_id
      deleteAssignmentByAssignmentID(assignment_id, student_id)
      return (<p>Assignment successfully deleted</p>)
      }
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
                user_assignment ID: {teacherClassAssignmentData.id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Assignment_id: {teacherClassAssignmentData.assignment_id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                user_id: {teacherClassAssignmentData.user_id}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Student work: {teacherClassAssignmentData.work}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Date submitted: {teacherClassAssignmentData.submit_date}
              </Typography>
              <Typography variant="body2">
                Mark: {teacherClassAssignmentData.mark}
              </Typography>
                <Box mt={3}>
                </Box>
                <LoadingButton 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                key={teacherClassAssignmentData.id}
                onClick={() => {
                 handleAssignmentToDisplay(teacherClassAssignmentData);
                }}
                >View this assignment
                </LoadingButton>
                <Box mt={2}>
                </Box> 
                <LoadingButton 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                key={teacherClassAssignmentData.id}
                onClick={() => {
                handleAssigmenttoDelete(teacherClassAssignmentData);
                }}
                >
                Delete this assignment
                </LoadingButton>
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