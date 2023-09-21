import { Button } from "@mui/material"
import AssignmentIcon from '@mui/icons-material/Assignment';



export const TeacherWorkButton = () => {
    return (
        <Button variant="contained" startIcon={<AssignmentIcon/>} sx={{mr: 2}}>
            Work Assigned
        </Button>
    )
    
}