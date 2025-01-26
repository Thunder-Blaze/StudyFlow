import PropTypes from 'prop-types';
import { FaBell, FaSearch } from 'react-icons/fa';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = ({ UserInfo, toggleSidebar }) => {
    return (
        <div className="p-3 px-4 flex w-full justify-between gap-4">
            <div className='flex gap-2 items-center justify-center'>
                <HiMenu className='w-8 h-8 flex lg:hidden cursor-pointer' onClick={toggleSidebar} />
                <div className="w-full max-w-[20rem] relative">
                    <FaSearch className="text-gray-500 absolute left-3 top-4" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none m-1 p-2 pl-8 bg-gray-900 w-full min-w-0 rounded-lg"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 shrink-0">
                <img
                    src={UserInfo.image}
                    className="h-10 aspect-square object-cover rounded-full"
                />
                <div className="hidden lg:flex flex-col justify-center">
                    <span className="font-bold">{UserInfo.name}</span>
                    <span className="text-gray-400 text-sm font-medium">
                        {UserInfo.position}
                    </span>
                </div>
                <div className="hidden lg:flex h-full justify-center items-center">
                    <Link
                        to="/announcements"
                        className="relative cursor-pointer"
                    >
                        <div className="w-2.5 h-2.5 bg-red-500 absolute top-0 right-0 rounded-full"></div>
                        <FaBell className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    UserInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar
