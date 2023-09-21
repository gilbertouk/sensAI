import "./App.css";
import { Route, Routes } from "react-router-dom";
import { StudentAssignmentsPage } from "./components/StudentAssignmentsPage";
import { ClassesList } from "./components/ClassesList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { DisplayStudentAssignment } from "./components/DisplayStudentAssignment";
import { StudentLessonsPage } from "./components/StudentLessonsPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TeacherLessonsClassList from "./components/TeacherLessonsClassList";
import TeacherAssignmentsClassList from "./components/TeacherAssignmentClassList";
import Home from "./components/Home";
import TeacherClasses from "./components/TeacherClasses";

import { getUser } from "./utils/api";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log("🚀 ~ App ~ user:", currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { user: fetchedUser } = await getUser(user.email);
        setCurrentUser(fetchedUser);
      } else {
        setCurrentUser("logged out");
      }
    });
  }, []);
  return (
    <>
      {/* <Header /> Most likely used for home page/login */}
      <Navbar user={currentUser} />
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
        <Route path="/student/lessons" element={<StudentLessonsPage user={currentUser}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/teacher/lessons/:class_id"
          element={<TeacherLessonsClassList user={currentUser} />}
        />
        <Route
          path="/teacher/assignments/:class_id"
          element={<TeacherAssignmentsClassList user={currentUser} />}
        />
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/teacher/classes/:teacher_id" element={<TeacherClasses user={currentUser} />} />
      </Routes>
    </>
  );
}

export default App;
