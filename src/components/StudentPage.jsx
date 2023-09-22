import { Container, Grid } from "@mui/material"
import { StudentList } from "./StudentList"
import { TeacherLessonsButton } from "./TeacherLessonsButton"
import { TeacherWorkButton } from "./TeacherWorkButton"



export const StudentPage = ({user}) => {

    return (
        <>
            <Grid container sx={{justifyContent: "center"}}>
                <Grid item xs={4} md={1}>
            <TeacherWorkButton/>
                </Grid>
                <Grid item xs={4} md={1}>
            <TeacherLessonsButton/>
                    
                </Grid>
            </Grid>
        <StudentList user={user}/>        
        </>
    )
}