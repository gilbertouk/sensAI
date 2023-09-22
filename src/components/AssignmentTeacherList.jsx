import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAssignmentsByTeacherId } from "../utils/api";
import { TeacherAssignmentCard } from "./AssignmentTeacherCard.jsx";

export default function TeacherAssignmentsList({ user }) {
  const [teacherAssignments, setTeacherAssignment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  //change 101 on line 13 to user.id
  useEffect(() => {
    setIsLoading(true);
    if (user) {
    getAssignmentsByTeacherId(user.id)
      .then(({ assignments }) => {
        setIsLoading(false);
        setTeacherAssignment(assignments);
        setError(false)
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true)
      });
    }
  }, [user]);

  function handleAssignmentToDisplay(student_id) {
    navigate(`/teacher/assignments/student/${student_id}`);
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className="student-lesson-container">
      {teacherAssignments.map((assignment) => {
        return (
          <li
            key={assignment.id}
            onClick={() => {
              handleAssignmentToDisplay(assignment.user_id);
            }}
          >
            <TeacherAssignmentCard teacherAssignmentData={assignment} />
          </li>
        );
      })}
    </ul>
  );
}
