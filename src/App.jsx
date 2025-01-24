import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import ManageTeam from "./pages/ManageTeam";
import MySchedule from "./pages/MySchedule";
import FAQs from "./pages/FAQs";
import AttendanceTracker from "./pages/AttendanceTracker";
import ProfilePage from "./pages/ProfilePage";
import StudentCalender from "./pages/StudentCalender";
import StudentGrades from "./pages/StudentGrades";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/team' element={<ManageTeam />} />
        <Route path='/schedule' element={<MySchedule />} />
        <Route path='/attendance' element={<AttendanceTracker />} />
        <Route path='/grades' element={<StudentGrades />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/calendar' element={<StudentCalender />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
