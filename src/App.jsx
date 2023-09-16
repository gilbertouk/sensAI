import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StudentAssignmentsPage } from './components/StudentAssignmentsPage';
import ClassesList from './components/ClassesList';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { DisplayStudentAssignment } from './components/DisplayStudentAssignment';
import { StudentLessonsPage } from './components/StudentLessonsPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  console.log('🚀 ~ App ~ user:', user);

  const handleLogin = (email) => {
    setUser(email);
  };
  return (
    <>
      {/* <Header /> Most likely used for home page/login */}
      <Navbar />
      <Routes>
        <Route
          path='/student/assignments'
          element={<StudentAssignmentsPage />}
        />
        <Route path='/teachers/home' element={<ClassesList />} />
        <Route
          path='/student/assignments/:assignment_id'
          element={<DisplayStudentAssignment />}
        />
        <Route path='/student/lessons' element={<StudentLessonsPage />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
