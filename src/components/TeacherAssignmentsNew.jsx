import React, { useState, useEffect } from "react";
import { postAssignment, getClassesByTeacherID } from "../utils/api";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const TeacherAssignmentsNew = ({ user }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    if (user) {
      getClassesByTeacherID(user.id)
        .then(({ classes }) => {
          setClasses(classes);
          if (classes.length > 0) setSelectedClass(classes[0].id);
        })
        .catch((err) => {
          console.log("Error Fetching Classes:", err);
          setLoading(false);
        });
    }
  }, [user]);

  useEffect(() => {
    if (selectedClass && user) {
      setLoading(false);
    }
  }, [selectedClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.id && selectedClass) {
      setPosting(true);
      postAssignment(user.id, selectedClass, title, body, dueDate)
        .then((data) => console.log("Assignment Posted:", data))
        .catch((err) => console.error("Error Posting Assignment:", err))
        .finally(() => {
          setPosting(false);
        });
    } else {
      console.error("User ID or Selected Class ID not available");
    }
  };
  if (loading)
    return (
      <Container component="main" maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={118} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
        </Grid>
      </Container>
    );
  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Assignment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              multiline
              rows={5}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel
                id="class-label"
                sx={{
                  backgroundColor: "white",
                  paddingLeft: "6px",
                  paddingRight: "6px",
                }}
              >
                Class
              </InputLabel>
              <Select
                labelId="class-label"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                label="Class" // Required for outlined variant
                required
              >
                {classes.map((cls) => (
                  <MenuItem key={cls.id} value={cls.id}>
                    {cls.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              loading={posting}
            >
              Post Assignment
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TeacherAssignmentsNew;
