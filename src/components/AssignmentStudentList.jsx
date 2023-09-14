import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const users_assignments = [
  {
    id: 1,
    title: "Math Assignment",
    body: "Solve exercises 1 to 5 from Chapter 3",
    teacher_id: 101,
    created_at: "2023-09-14 10:00:00",
    due_date: "2023-09-21 23:59:59",
  },
  {
    id: 2,
    title: "History Assignment",
    body: "Write an essay on the Industrial Revolution",
    teacher_id: 102,
    created_at: "2023-09-15 09:30:00",
    due_date: "2023-09-28 23:59:59",
  },
  {
    id: 3,
    title: "Science Assignment",
    body: "Conduct an experiment on electricity",
    teacher_id: 103,
    created_at: "2023-09-16 14:15:00",
    due_date: "2023-09-23 23:59:59",
  },
];

export function AssignmentStudentList() {
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
