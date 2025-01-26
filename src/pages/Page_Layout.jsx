import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import PropTypes from 'prop-types'

function Page_Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const UserInfo = {
        name: 'Artoria',
        position: '1st Year',
        profession: 'Student',
        image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    }

    return (
        <div className="w-full min-h-screen flex">
            <Sidebar UserInfo={UserInfo} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="flex flex-col w-full text-gray-200 bg-gray-950">
                <Navbar UserInfo={UserInfo} toggleSidebar={toggleSidebar} />
                {children}
            </div>
        </div>
    )
}

// Add PropTypes validation
Page_Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Page_Layout
