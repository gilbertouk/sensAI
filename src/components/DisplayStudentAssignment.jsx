import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";

const assignment = [
  {
    id: 1,
    assignment_id: 1,
    user_id: 1,
    work: null,
    submit_date: "1970-01-01",
    feedback: "feedback test",
    mark: null,
  },
  {
    id: 2,
    assignment_id: 2,
    user_id: 1,
    work: null,
    submit_date: "1970-01-01",
    feedback: null,
    mark: null,
  },
  {
    id: 3,
    assignment_id: 3,
    user_id: 1,
    work: null,
    submit_date: "1970-01-01",
    feedback: "Teacher feedback",
    mark: null,
  },
];

const users_assignments = [
  {
    id: 1,
    title: "English: Shakespeare assessment",
    body: "An assessment on Shakespeare, his plays and books",
    teacher_id: 101,
    due_date: "2021-10-11",
    created_at: "2021-11-11",
  },
  {
    id: 2,
    title: "English: Dickens assessment",
    body: "An assessment on Dickens Christmas stories",
    teacher_id: 101,
    due_date: "2022-10-11",
    created_at: "2022-09-01",
  },
  {
    id: 3,
    title: "Art: Dali assessment",
    body: "An assessment on surrealism and its implications for modernist art",
    teacher_id: 101,
    due_date: "2023-10-11",
    created_at: "2023-05-03",
  },
];

export function DisplayStudentAssignment() {
  const { assignment_id } = useParams();

  return (
    <Stack spacing={2} direction="column">
      <h2>{users_assignments[assignment_id - 1].title}</h2>
      <p>{users_assignments[assignment_id - 1].body}</p>
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
        <p>{assignment[assignment_id - 1].feedback}</p>
      </Stack>
    </Stack>
  );
}
