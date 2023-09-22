import { Container } from "@mui/material"
import { StudentList } from "./StudentList"
import { TeacherLessonsButton } from "./TeacherLessonsButton"
import { TeacherWorkButton } from "./TeacherWorkButton"



export const StudentPage = ({user}) => {

    return (
        <>
        <Container sx={{textAlign: "center"}}>
            <TeacherWorkButton/>
            <TeacherLessonsButton/>
        </Container>
        <StudentList user={user}/>        
        </>
    )
}