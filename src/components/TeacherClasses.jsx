import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClassesByTeacherID } from '../utils/api';

const TeacherClasses = ({ user }) => {
  const [classes, setClasses] = useState(null);
  const [loading, setLoading] = useState(true);
  const { teacher_id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (user) {
      getClassesByTeacherID(teacher_id).then(({ classes }) => {
        setLoading(false);
        setClasses(classes);
      });
    }
  }, [user]);

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {classes.map((classItem) => (
        <li key={classItem.id}>Your classes: {classItem.name}</li>
      ))}
    </ul>
  );
};

export default TeacherClasses;
