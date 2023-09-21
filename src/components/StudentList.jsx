import { StudentCard } from "./StudentCard"


export const StudentList = () => {

    const testData = [{
        id: 1,
        name: "User1",
        surname: "Surname1",
        email: "user1.surname1@example.com",
        role: "student",
        created_at: "2018-12-19 00:00:00",
        disability: "ADHD"
    },{
        id: 2,
        name: "User2",
        surname: "Surname2",
        email: "user2.surname1@example.com",
        role: "student",
        created_at: "2018-12-19 00:00:00",
        disability: "ADHD"
    }]


    return (
        <>
        <ul>
            {testData.map(student => {
                return <li key={student.id}>
                    <StudentCard student={student}/>
                </li>
            })}
        </ul>
        </>
    )
}