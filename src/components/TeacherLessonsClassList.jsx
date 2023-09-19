import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonByTeacherAndClass } from '../utils/api';

const TeacherLessonsClassList = ({ user }) => {
  const [lessons, setLessons] = useState(null);
  const [loading, setLoading] = useState(true);
  const { class_id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (user) {
      getLessonByTeacherAndClass(user.id, class_id).then(({ lessons }) => {
        setLoading(false);
        setLessons(lessons);
      });
    }
  }, [user]);

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
};

export default TeacherLessonsClassList;
