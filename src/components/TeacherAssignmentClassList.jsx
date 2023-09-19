import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAssignmentsByTeacherAndClass } from '../utils/api';

const TeacherAssignmentsClassList = ({ user }) => {
  const [assignments, setAssignments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { class_id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (user) {
      getAssignmentsByTeacherAndClass(user.id, class_id).then(({ assignments }) => {
        setLoading(false);
        setAssignments(assignments);
        setError(false);
      }).catch((error)=>{
        setError(true);
      })
    }
  }, [user]);
  if(error){
    return <p>No assignments for this class</p>
  }
  return loading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {assignments.map((assignment) => (
        <li key={assignment.id}>{assignment.title}</li>
      ))}
    </ul>
  );
};

export default TeacherAssignmentsClassList;
