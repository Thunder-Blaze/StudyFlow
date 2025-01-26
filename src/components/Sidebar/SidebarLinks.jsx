import {
    FaHome,
    FaUser,
    FaUsers,
    FaQuestionCircle,
    FaCalendarAlt,
    FaStar,
    FaClipboardCheck,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SidebarLinks = () => {
    return (
        <div className="flex w-full flex-col mt-2 p-3 text-gray-200 text-md font-semibold">
            <Link to="/" className="px-3 py-1 flex gap-2 items-center">
                <FaHome />
                Home
            </Link>

            <h1 className="text-md font-semibold text-gray-400 mt-4">Data</h1>
            <Link to="/profile" className="px-3 py-1 flex gap-2 items-center">
                <FaUser />
                Profile
            </Link>
            <Link to="/team" className="px-3 py-1 flex gap-2 items-center">
                <FaUsers />
                Manage Team
            </Link>

            <h1 className="text-md font-semibold text-gray-400 mt-4">Pages</h1>
            <Link to="/calendar" className="px-3 py-1 flex gap-2 items-center">
                <FaCalendarAlt />
                Calender
            </Link>
            <Link to="/faqs" className="px-3 py-1 flex gap-2 items-center">
                <FaQuestionCircle />
                FAQs
            </Link>

            <h1 className="text-md font-semibold text-gray-400 mt-4">Charts</h1>
            <Link to="/grades" className="px-3 py-1 flex gap-2 items-center">
                <FaStar />
                Grades
            </Link>
            <Link
                to="/attendance"
                className="px-3 py-1 flex gap-2 items-center"
            >
                <FaClipboardCheck />
                Attendance
            </Link>
        </div>
    )
}

export default SidebarLinks
