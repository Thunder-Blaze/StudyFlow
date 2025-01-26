import PropTypes from 'prop-types'
import SidebarLinks from './SidebarLinks'
import { FaXmark } from "react-icons/fa6";

function Sidebar({ UserInfo, toggleSidebar, isSidebarOpen }) {
    return (
        <div className={`h-screen ${isSidebarOpen ? "translate-none" : "-translate-x-full" } lg:translate-none fixed lg:sticky top-0 min-w-screen flex overflow-y-auto justify-start sm:min-w-[16rem] bg-gray-900 transition-all duration-300 items-center flex-col z-50`}>
            <FaXmark
                className="w-8 h-8 lg:hidden absolute top-5 left-3 cursor-pointer"
                onClick={toggleSidebar} 
            />
            <div className="flex flex-col">
                <img
                    src={UserInfo.image}
                    alt="PFP"
                    className="aspect-square rounded-full w-40 m-auto mt-8 object-cover"
                />
                <h2 className="m-auto mt-2 text-2xl text-gray-100 font-bold">
                    {UserInfo.name}
                </h2>
                <h2 className="m-auto text-md text-gray-300">
                    {UserInfo.profession}
                </h2>
            </div>
            <SidebarLinks />
        </div>
    )
}

Sidebar.propTypes = {
    UserInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
}

export default Sidebar
