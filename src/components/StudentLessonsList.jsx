import { useState, useEffect } from "react"
import { StudentLessonsCard } from "./StudentLessonsCard";
import { getLessonsByStudentId } from "../utils/api";
import { Link } from "react-router-dom";

export const StudentLessonsList = ({user}) => {
    const [lessons, setLessons] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (user) {
            getLessonsByStudentId(user.id).then(({ lessons }) => {
            setLoading(false);
            setLessons(lessons);
          });
        }
      }, [user]);
    

    return loading ? (
        <p>Loading...</p>
    ) : (
        <ul className="student-lesson-container">
            {lessons.map(lesson => {
                return <Link to={`/student/lessons/${lesson.id}`}><li key={lesson.id}><StudentLessonsCard lessonData={lesson}/></li></Link>
            })}
        </ul>
    )
    
}