import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonByTeacherAndClass } from '../utils/api';

const TeacherLessonsClassList = ({ user }) => {
  console.log('🚀 ~ TeacherLessonsClassList ~ user:', user);
  const [lessons, setLessons] = useState(null);
  console.log('🚀 ~ TeacherLessonsClassList ~ lessons:', lessons);
  const { class_id } = useParams();
  // const user = {
  //   id: 101,
  //   name: 'User101',
  //   surname: 'Surname101',
  //   email: 'user101.surname101@yahoo.com',
  //   role: 'teacher',
  //   created_at: '2003-11-07T00:00:00.000Z',
  //   disability: null,
  // };

  useEffect(() => {
    getLessonByTeacherAndClass(user.id, class_id).then(({ lessons }) => {
      setLessons(lessons);
    });
  }, []);

  return <p>Class ID: {class_id} user</p>;
};

export default TeacherLessonsClassList;
