import { Button } from "@mui/material"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


export const TeacherLessonsButton = () => {
    return (
        <Button variant="contained" startIcon={<LocalLibraryIcon/>} sx={{ml: 2}}>
            Lessons Assigned
        </Button>
    )
    
}