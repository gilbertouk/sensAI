import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAssignmentsByTeacherId } from "../utils/api";
import { TeacherAssignmentCard } from "./AssignmentTeacherCard.jsx";

export default function TeacherAssignmentsList({ user }) {
  const [teacherAssignments, setTeacherAssignment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (user) {
      getAssignmentsByTeacherId(user.id)
        .then(({ assignments }) => {
          setIsLoading(false);
          setTeacherAssignment(assignments);
          setError(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(true);
        });
    }
  }, [user]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className="student-lesson-container">
      {teacherAssignments.map((assignment) => {
        return (
          <li key={assignment.id}>
            <TeacherAssignmentCard teacherAssignmentData={assignment} />
          </li>
        );
      })}
    </ul>
  );
}
