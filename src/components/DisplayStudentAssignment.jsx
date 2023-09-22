import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getAssignmentsByAssignmentId } from "../utils/api";

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
        setIsLoading(false);
      });
  }, [assignment_id, user.id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Stack spacing={2} direction="column">
      <h2>{studentAssignment.title}</h2>
      <p>{studentAssignment.body}</p>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Start</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "90vw" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows={4}
              defaultValue=""
            />
          </div>
          {/* <Button variant="contained">Salve</Button> */}
        </Box>
      </Stack>
      <Divider>Feedback</Divider>
      <Stack spacing={2} direction="row">
        <p>{studentAssignment.feedback}</p>
      </Stack>
    </Stack>
  );
}
