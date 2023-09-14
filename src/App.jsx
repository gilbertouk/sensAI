import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { AssignmentStudentPage } from "./components/AssignmentStudentPage";

function App() {
  return (
    <>
      {/* <Header /> Most likely used for home page/login */}
      <Navbar />
      <Routes></Routes>
    </>
  );
}

export default App;
