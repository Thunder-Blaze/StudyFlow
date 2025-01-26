import PropTypes from 'prop-types'
import SidebarLinks from './SidebarLinks'

function Sidebar({ UserInfo }) {
    return (
        <div className="h-screen sticky top-0 min-w-screen lg:flex hidden overflow-y-auto justify-start sm:min-w-[16rem] bg-gray-900 items-center flex-col">
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
}

export default Sidebar
