import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonByTeacherAndClass } from '../utils/api';
import { TeacherLessonCard } from './TeacherLessonCard';
import { Link } from 'react-router-dom';

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
    <ul className="student-lesson-container">
            {lessons.map(lesson => {
                return (
                <div key={lesson.id}>
                <Link to={`/teacher/${lesson.id}/lessons`}><li ><TeacherLessonCard lessonData={lesson}/></li></Link>
                </div>)
            })}
        </ul>
  );
};

export default TeacherLessonsClassList;
