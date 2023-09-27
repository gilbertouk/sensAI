import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createAIFeedback,
  getStudentsAssignmentsById,
  patchAssigmentFeedbackAndMark,
} from "../utils/api";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Skeleton,
} from "@mui/material";

const TeacherAssignmentFeedback = () => {
  const { assignment_id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [mark, setMark] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [aiButton, setAIbutton] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [waitingRes, setWaitingRes] = useState(false);

  useEffect(() => {
    getStudentsAssignmentsById(assignment_id)
      .then(({ assignment }) => {
        setAssignment(assignment);
        setMark(assignment.users_assignments_mark || "");
        setFeedback(assignment.users_assignments_feedback || "");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("🚀 ~ error loading assignment:", err);
        setIsLoading(false);
      });
  }, [assignment_id]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    patchAssigmentFeedbackAndMark(assignment_id, mark, feedback)
      .then((updatedAssignment) => {
        setIsSubmitting(false);
        setAssignment((prevAssignment) => ({
          ...prevAssignment,
          users_assignments_feedback: updatedAssignment.feedback,
          users_assignments_mark: updatedAssignment.mark,
        }));
      })
      .catch((err) => {
        console.log("🚀 ~ handleSubmit ~ err:", err);
        setIsSubmitting(false);
      });
  };

  const handleAIclick = (e) => {
    e.preventDefault();
    if(aiButton){
      setDisabledBtn(true);

    }
    if(assignment.users_assignments_work && assignment.users_assignments_submit_date){
      setAIbutton(true);
      setWaitingRes(true);
      createAIFeedback(assignment.users_assignments_work).then((data)=> {
        setDisabledBtn(true);
        setWaitingRes(false);
        setAIbutton(false);
        setMark(data.mark);
        setFeedback(data.feedback);
      })
    }
  }

  if (isLoading) {
    return (
      <Container component={Paper} sx={{ p: 5 }}>
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="60%" />
      </Container>
    );
  }

  return (
    <Container component={Paper} sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Assignment Feedback
      </Typography>
      <Grid container spacing={3}>
        {assignment && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {assignment.assignment_title}
              </Typography>
              <Typography paragraph>
                <strong>Assignment Body:</strong> {assignment.assignment_body}
              </Typography>
              <Typography paragraph>
                <strong>Created At:</strong> {assignment.assignment_created_at}
              </Typography>
              <Typography paragraph>
                <strong>Due Date:</strong> {assignment.assignment_due_date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Student Details:</Typography>
              <Typography paragraph>
                <strong>Name:</strong> {assignment.user_name}{" "}
                {assignment.user_surname}
              </Typography>
              <Typography paragraph>
                <strong>Email:</strong> {assignment.user_email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Assignment Submission Details:
              </Typography>
              <Typography paragraph>
                <strong>Submitted Work:</strong>{" "}
                {assignment.users_assignments_work || "Not Submitted"}
              </Typography>
              <Typography paragraph>
                <strong>Submit Date:</strong>{" "}
                {assignment.users_assignments_submit_date || "Not Submitted"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                {waitingRes ? 
                <TextField
                label="Mark"
                type="text"
                value={"AI mark will appear here"}
                required
                variant="outlined"
                margin="normal"
                fullWidth
                disabled
              /> :
              <TextField
                  label="Mark"
                  type="text"
                  value={mark}
                  onChange={(e) => setMark(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />}
                {waitingRes ? 
                <TextField
                label="Feedback"
                value={"AI feedback will appear here"}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                fullWidth
                disabled
              /> :
              <TextField
                  label="Feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{mt: 2, mr: 2}}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  disabled={disabledBtn}
                  onClick={handleAIclick}
                  sx={{mt: 2}}
                >
                  AI generate mark and feedback
                </Button>
              </form>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default TeacherAssignmentFeedback;
