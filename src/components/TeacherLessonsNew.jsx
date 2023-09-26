import React, { useState, useEffect } from "react";
import { postLesson, getClassesByTeacherID } from "../utils/api";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
  Grid,
  Typography,
  Skeleton,
  Alert,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const TeacherAssignmentsNew = ({ user }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [unsuccessfullSubmit, setUnsuccessfullSubmit] = useState(false)
  const [aiButton, setAIbutton] = useState(false);
  const [aiPrompt, setAIprompt] = useState("");
  const [selectedTextLength, setSelectedTextLength] = useState(1);

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
          setUnsuccessfullSubmit(true)
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
      postLesson(user.id, selectedClass, title, body)
        .then((data) => {
          console.log("Assignment Posted:", data)
          setUnsuccessfullSubmit(false)
          setSuccessSubmit(true);
          setTimeout(() => {
            setSuccessSubmit(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Error Posting Assignment:", err)
          setSuccessSubmit(false);
          setUnsuccessfullSubmit(true)
        })
        .finally(() => {
          setPosting(false);
        });
    } else {
      console.error("User ID or Selected Class ID not available");
      setUnsuccessfullSubmit(true)
      setSuccessSubmit(false);
    }
  };

  const handleAIclick = (e) => {
    e.preventDefault();
    setAIbutton(true);
    if(aiButton){
      setAIbutton(false);
    }

  }
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
    <Container component="main" maxWidth="sm" sx={{mb: 2}}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Lesson
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
                label="Class"
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
          {aiButton ?
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lesson Subject"
              value={aiPrompt}
              onChange={(e) => setAIprompt(e.target.value)}
              required
              multiline
              rows={5}
              variant="outlined"
            />
          </Grid> : null }
          {aiButton ? 
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
                Lesson Text Length
              </InputLabel>
              <Select
                labelId="class-label"
                value={selectedTextLength}
                onChange={(e) => setSelectedTextLength(e.target.value)}
                label="Class"
                required
              >
                  <MenuItem value={1}>
                    100
                  </MenuItem>
                  <MenuItem value={2}>
                    250
                  </MenuItem>
                  <MenuItem value={3}>
                    500
                  </MenuItem>
                  <MenuItem value={4}>
                    750
                  </MenuItem>
                  <MenuItem value={5}>
                    1000
                  </MenuItem>
  
              </Select>
            </FormControl>
          </Grid> : null }
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              loading={posting}
            >
              Post Lesson
            </LoadingButton>
              {successSubmit ? (
              <Grid item mb={2} ml={3} mr={3} xs={12}>
              <Alert severity="success">Assignment successfully posted!</Alert>
              </Grid>
              ) : (
              <></>
              )}
              {unsuccessfullSubmit ? (
              <Grid item mb={2} ml={3} mr={3} xs={12}>
              <Alert severity="success">Error: Error fetching classes, User ID not available, Class ID not available or error posting assignment</Alert>
              </Grid>
              ) : (
                <></>
                )}
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAIclick}
            
            >
              AI generate lesson
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TeacherAssignmentsNew;
