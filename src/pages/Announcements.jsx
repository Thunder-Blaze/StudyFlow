import Announcements_Data from '../data/Announcements_Data.json'
import Page_Layout from './Page_Layout'

const Announcements = () => {
    return (
        <Page_Layout>
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
        </Page_Layout>
    )
}

export default Announcements
