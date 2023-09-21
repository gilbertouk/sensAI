import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClassesByTeacherID } from '../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TeacherClassesCard } from './TeacherClassesCard';

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
      <>
        <h2>Your classes:</h2>
        {classes.map((classItem) => (
          <li key={classItem.id}><TeacherClassesCard classItem={classItem}/></li>
      ))}
    </>
  );
};

export default TeacherClasses;