import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AssignmentStudentPage } from "./components/AssignmentStudentPage";
import ClassesList from "./components/ClassesList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
    {/* <Header /> Most likely used for home page/login */}
      <Navbar />
      <Routes>
        <Route
          path="/student/assignments"
          element={<AssignmentStudentPage />}
        />
        <Route path="/teachers/home" element={<ClassesList />} />
      </Routes>
    </>
  );
}

export default App;
