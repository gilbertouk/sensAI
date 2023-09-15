import "./App.css";
import { Route, Routes } from "react-router-dom";
import { StudentAssignmentsPage } from "./components/StudentAssignmentsPage";
import ClassesList from "./components/ClassesList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { DisplayStudentAssignment } from "./components/DisplayStudentAssignment";

function App() {
  return (
    <>
      {/* <Header /> Most likely used for home page/login */}
      <Navbar />
      <Routes>
        <Route
          path="/student/assignments"
          element={<StudentAssignmentsPage />}
        />
        <Route path="/teachers/home" element={<ClassesList />} />
        <Route
          path="/student/assignments/:assignment_id"
          element={<DisplayStudentAssignment />}
        />
      </Routes>
    </>
  );
}

export default App;
