import { useParams } from "react-router-dom";
import { getStudentsByTeacherClass } from "../utils/api";
import { StudentCard } from "./StudentCard"
import { useState, useEffect } from "react";

export const StudentList = ({user}) => {
    const [students, setStudents] = useState(null);
    const [loading, setLoading] = useState(true);
    const { class_id } = useParams();

    useEffect(()=> {
        setLoading(true);
        if(user){
            getStudentsByTeacherClass(user.id, class_id).then(({students}) => {
                setLoading(false);
                setStudents(students);
            })
        }
    },[user])

    return( 
    loading ? <p>Loading...</p> : 
    (
        <>
        <ul>
            {students.map(student => {
                return <li key={student.id}>
                    <StudentCard student={student}/>
                </li>
            })}
        </ul>
        </>
    )
    )
}