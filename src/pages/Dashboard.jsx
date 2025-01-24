import React from 'react'
import DashboardBanner from "../components/Dashboard/DashboardBanner";
import CourseInstructors from "../components/Dashboard/CourseInstructors";
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import EnrolledCourses from '../components/Courses/EnrolledCourses';
import Announcement from '../components/Announcement/Announcement';

function Dashboard() {
    const UserInfo = {
        name: 'Artoria',
        position: '1st Year',
        profession: 'Student',
        image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    }

    return (
        <div className='Dashboard w-full min-h-screen flex'>
            <Sidebar UserInfo={UserInfo} />
            <div className='flex flex-col w-full text-gray-200 bg-gray-950'>
                <Navbar UserInfo={UserInfo} />
                <DashboardBanner UserName={UserInfo.name} />
                <CourseInstructors />
                <EnrolledCourses />
                <Announcement />
            </div>
        </div>
    )
}

export default Dashboard