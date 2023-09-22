/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Divider, Grid, Skeleton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import {
  getAssignmentsByAssignmentId,
  patchStudentAssignmentByAssignmentId,
} from "../utils/api";

export function DisplayStudentAssignment({ user }) {
  const [studentAssignment, setStudentAssignment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { assignment_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getAssignmentsByAssignmentId(user.id, assignment_id)
      .then(({ assignment }) => {
        setIsLoading(false);
        setStudentAssignment(assignment[0]);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [assignment_id, user.id]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (studentAssignment.work) {
      patchStudentAssignmentByAssignmentId(user.id, assignment_id, {
        work: studentAssignment.work,
      })
        .then(({ assignment }) => {
          setStudentAssignment((currentAssignment) => {
            return { ...currentAssignment, ...assignment };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleOnChangeWork(event) {
    return setStudentAssignment((currentAssignment) => {
      const newAssignment = { ...currentAssignment };
      newAssignment.work = event.target.value;
      return newAssignment;
    });
  }

  return isLoading ? (
    <>
      <Typography pl={3} pr={3} variant="h1">
        <Skeleton />
      </Typography>

      <Typography pl={3} pt={1} pr={3} variant="h1">
        <Skeleton />
      </Typography>

      <Typography pl={3} pt={1} pr={3} variant="h1">
        <Skeleton />
      </Typography>
    </>
  ) : (
    <>
      <Grid
        spacing={1}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            {studentAssignment.title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            {studentAssignment.body}
          </Typography>
        </Grid>

        <form onSubmit={handleSubmitForm}>
          <Grid
            spacing={2}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            p={3}
          >
            <Grid item>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Start</Button>
            </Grid>
          </Grid>
          <Grid item ml={3} mr={3} xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Answer"
              fullWidth={true}
              multiline
              rows={5}
              size="medium"
              value={studentAssignment.work ? studentAssignment.work : ""}
              onChange={handleOnChangeWork}
            />
          </Grid>
        </form>

        {studentAssignment.feedback ? (
          <>
            <Grid item mt={7}>
              <Divider>Feedback</Divider>
            </Grid>
            <Grid item p={2}>
              <Typography variant="subtitle1" align="center">
                {studentAssignment.feedback}
              </Typography>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
