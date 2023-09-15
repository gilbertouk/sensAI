import { useState } from "react"
import { StudentLessonsCard } from "./StudentLessonsCard";


export const StudentLessonsList = () => {
    const [data, setData] = useState([])

    //Replace with endpoint data when created
    const testData =
    [
        {
          id: 1,
          title: "English: Shakespeare",
          body: "An exploration of Shakespeare, his plays and books",
          teacher_id: 101,
          created_at: "2021-10-11",
        },
        {
          id: 2,
          title: "English: Dickens",
          body: "A deep dive into Dickens Christmas stories",
          teacher_id: 101,
          created_at: "2022-09-01",
        }
    ] 

    return (
        <ul className="student-lesson-container">
            {testData.map(lesson => {
                return <li key={lesson.id}><StudentLessonsCard lessonData={lesson}/></li>
            })}
        </ul>
    )
    
}