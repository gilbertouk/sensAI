import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClassesByTeacherID } from '../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

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
        <Box sx={{ width: "75%" }}>
        <Stack spacing={5}>
    <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <Card variant="outlined" >
              <CardContent style={{backgroundColor: "lightgrey"}}>
              <Typography gutterBottom variant="h3" component="div" color="text.primary">
                  {classItem.name}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" color="text.secondary">
                  {classItem.age_group}
                </Typography>
                <Typography gutterBottom variant="h4" component="div" color="text.secondary">
                  {classItem.subject}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                  {classItem.created_at}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                  {classItem.exam_board}
              </Typography>
              </CardContent>
            </Card>
          </li>
      ))}
          </ul>
          </Stack>
          </Box>
    </>
  );
};

export default TeacherClasses;
