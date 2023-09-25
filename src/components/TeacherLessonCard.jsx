import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import { deleteLessonByLessonID } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";

export const TeacherLessonCard = ({lessonData}) => {
  const navigate = useNavigate();
  
  function handleLessonToDisplay(lessonData) {
    navigate(`/teacher/${lessonData.id}/lessons`);
  } 

function handleLessonToDelete(lessonData) {
    const lesson_id = lessonData.id
  deleteLessonByLessonID(lesson_id)
  return (<p>Lesson successfully deleted</p>)
  }
    return (
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        mt: 5,
        cursor: 'pointer',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {lessonData.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {lessonData.body}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {(new Date(lessonData.created_at)).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid>
            <Box mt={3}>
                </Box>
                <LoadingButton 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                 handleLessonToDisplay(lessonData);
                }}
                >View this lesson
                </LoadingButton>
                <Box mt={2}>
                </Box> 
                <LoadingButton 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                handleLessonToDelete(lessonData);
                }}
                >
                Delete this lesson
                </LoadingButton>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <SchoolIcon/>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    )
}