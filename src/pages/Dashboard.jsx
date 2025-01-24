import React from 'react'
import DashboardBanner from "../components/Dashboard/DashboardBanner";
import CourseInstructors from "../components/Dashboard/CourseInstructors";
import Sidebar from '../components/Sidebar/Sidebar';

function Dashboard() {
  return (
    <div className='Dashboard w-full min-h-screen flex'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <DashboardBanner />
            <CourseInstructors />
        </div>
    </div>
  )
}

export default Dashboard