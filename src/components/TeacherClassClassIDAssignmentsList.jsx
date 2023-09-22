import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAssignmentsByTeacherId } from "../utils/api";
import { TeacherClassClassIDAssignmentsCard } from "./TeacherClassClassIDAssignmentCard";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';


export default function TeacherClassClassIDAssignmentsList ({ user }) {
  const [teacherClassAssignments, setTeacherClassAssignment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {class_id} = useParams()

  useEffect(() => {
    setIsLoading(true);
    if (user) {
        getAssignmentsByTeacherId(user.id)//use params not 1 but class_id (should return users_assignments for a teacher, not the assignments)
      .then(({ assignments }) => {
        setIsLoading(false);
        setTeacherClassAssignment(assignments);
        setError(false)
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true)
      });
    }
}, [user]);
/*
  function handleAssignmentToDisplay(assignment) {
    const student_id = assignment.user_id
    navigate(`/teacher/assignments/student/${student_id}`);
  }
*/

  function handleAssignmentToCreate() {
    navigate(`/teacher/assignments/new`);
  }
/*
  function handleAssigmenttoDelete(assignment) {
    const assignment_id = assignment.id
  deleteAssignmentByAssignmentID(assignment_id, user.id)
  .then(() => {
      useEffect(() => {
          setIsLoading(true);
          if (user) {
          getAssignmentsByTeacherIdAndClassID(user.id, class_id)//use params not 1 but class_id
            .then(({ assignments }) => {
              setIsLoading(false);
              setTeacherClassAssignment(assignments);
              setError(false)
            })
            .catch((error) => {
              setIsLoading(false);
              setError(true)
            });
          }
      }, [user]);
    })
  }
  */
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className="student-lesson-container">
        <Box mt={3}>
        </Box> 
        <Box display="flex" justifyContent="center">
            <Box width="33%">
                <LoadingButton 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                    handleAssignmentToCreate();
                    }}
                    >Create new assignment
                </LoadingButton>
            </Box>
        </Box>
      {teacherClassAssignments.map((assignment) => {
        return (
            <li key={assignment.id}>
            <TeacherClassClassIDAssignmentsCard teacherClassAssignmentData={assignment} 
            />
          </li>
        )})} 
    </ul>
    )
}
