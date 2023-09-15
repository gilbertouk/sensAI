import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

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

export function StudentAssignmentsList() {
  const navigate = useNavigate();

  function handleAssignmentToDisplay(users_assignment) {
    navigate(`/student/assignments/${users_assignment.id}`);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <h2>Assignments</h2>
      <Stack spacing={2}>
        <ul>
          {users_assignments.map((users_assignment, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleAssignmentToDisplay(users_assignment);
                }}
              >
                <p>Title: {users_assignment.title}</p>
                <p>created_at: {users_assignment.created_at}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </Stack>
    </Box>
  );
}
