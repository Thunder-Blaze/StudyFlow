import React, { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
// const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Error404 = lazy(() => import("./pages/Error404"));
const ManageTeam = lazy(() => import("./pages/ManageTeam"));
const MySchedule = lazy(() => import("./pages/MySchedule"));
const FAQs = lazy(() => import("./pages/FAQs"));
const AttendanceTracker = lazy(() => import("./pages/AttendanceTracker"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const StudentCalender = lazy(() => import("./pages/StudentCalender"));
const StudentGrades = lazy(() => import("./pages/StudentGrades"));
const Announcements = lazy(() => import("./pages/Announcements"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/team' element={<ManageTeam />} />
            <Route path='/schedule' element={<MySchedule />} />
            <Route path='/announcements' element={<Announcements />} />
            <Route path='/attendance' element={<AttendanceTracker />} />
            <Route path='/grades' element={<StudentGrades />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/calendar' element={<StudentCalender />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
