import React from 'react'
import DashboardBanner from "../components/Dashboard/DashboardBanner";
import CourseInstructors from "../components/Dashboard/CourseInstructors";
import Sidebar from '../components/Sidebar/Sidebar';
import EnrolledCourses from '../components/Courses/EnrolledCourses';
import Announcement from '../components/Announcement/Announcement';

function Dashboard() {
  return (
    <div className='Dashboard w-full min-h-screen flex'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <DashboardBanner />
            <CourseInstructors />
            <EnrolledCourses />
            < Announcement />
        </div>
    </div>
  )
}

export default Dashboard