import DashboardBanner from '../components/Dashboard/DashboardBanner'
import CourseInstructors from '../components/Dashboard/CourseInstructors'
import EnrolledCourses from '../components/Courses/EnrolledCourses'
import Announcement from '../components/Announcement/Announcement'
import Page_Layout from './Page_Layout'
import Schedule from '../components/Schedules/Schedule'

function Dashboard() {
    const UserInfo = {
        name: 'Artoria',
        position: '1st Year',
        profession: 'Student',
        image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    }

    return (
        <Page_Layout>
            <DashboardBanner UserName={UserInfo.name} />
            <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full">
                    <Schedule />
                    <EnrolledCourses />
                </div>
                <div className="w-full flex flex-col-reverse md:flex-col md:max-w-80 pl-4 pb-2 md:pl-0 md:pb-0">
                    <CourseInstructors />
                    <Announcement />
                </div>
            </div>
        </Page_Layout>
    )
}

export default Dashboard
