import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Announcements_Data from '../data/Announcements_Data.json'

const Announcements = () => {
    const UserInfo = {
        name: 'Artoria',
        position: '1st Year',
        profession: 'Student',
        image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    }

    return (
        <div className="Dashboard w-full min-h-screen flex">
            <Sidebar UserInfo={UserInfo} />
            <div className="flex flex-col w-full text-gray-200 bg-gray-950">
                <Navbar UserInfo={UserInfo} />
                <div>
                    <h1 className="ml-6 text-3xl font-bold my-4 mb-8">
                        Announcements
                    </h1>
                    <div className="flex flex-col gap-4 mt-4 m-6">
                        {Announcements_Data.map((info, key) => {
                            return (
                                <div
                                    key={key}
                                    className="bg-gray-800 rounded-lg text-sm p-5 px-3 text-white flex flex-row justify-between gap-3 border-2 border-solid border-gray-500 transition-all duration-300 hover:bg-gray-950 "
                                >
                                    <div className="flex items-center justify-center shrink-0">
                                        <img
                                            src="https://www.svgrepo.com/show/496446/note-text.svg"
                                            alt=""
                                            className={`w-6 ml-1 aspect-square object-contain invert`}
                                        />
                                    </div>
                                    <div>
                                        <p className="line-clamp-2 p-0.5 tracking-wider">
                                            {info.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements
