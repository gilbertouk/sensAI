import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { getClassesByTeacherID } from "../utils/api";
import { CardContent, Card, CardHeader } from "@mui/material";

const Home = ({ user }) => {
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(true);
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

  useEffect(()=> {
    if(user){
      getClassesByTeacherID(user.id).then(({classes})=> {
        setLoading(false);
        setClasses(classes);
      })
    }
  },[user])

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
                {loading ?  <Typography gutterBottom>Loading...</Typography>:
                <ul>
                  {classes.map(group=> {
                    return <li key={group.id}>
                      <Typography gutterBottom>{group.age_group} • {group.exam_board} • {group.subject} • {group.name}</Typography>
                    </li>
                  })}
                </ul>
                
                  }
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
