import React from "react";
import { LoginButton } from "./LoginButton";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';


const Home = ({ user }) => {
  let userStatus = null;

  if (user === "logged out") {
    userStatus = `You are logged out!`;
  } else if (user === "null") {
    userStatus = "";
  } else if (user && user.role === "student") {
    userStatus = `Logged in as STUDENT-${user.id}`;
  } else if (user && user.role === "teacher") {
    userStatus = `Logged in as TEACHER-${user.id}`;
  }

  return (
    <>
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
        borderRadius: '5px',
        borderColor: "lightblue",
          ':hover': {
            backgroundColor: "rgb(7, 77, 177, 0.22)", // theme.shadows[20]
          }
        }}
        variant="outlined"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" align="center">
                  {userStatus}
              </Typography>
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
        borderRadius: '5px',
        borderColor: "lightblue",
        ':hover': {
          backgroundColor: "rgb(7, 77, 177, 0.22)", // theme.shadows[20]
        }
        }}
        variant="outlined"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" align="center">
                  Your Current Classes
              </Typography>
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
    </>
  );
};

export default Home;
