import User_Teams from '../data/User_Teams.json'
import { Link } from 'react-router-dom'
import Page_Layout from './Page_Layout'

const ManageTeam = () => {
    return (
        <Page_Layout>
            <div className="p-4 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {User_Teams.map((team, key) => {
                    return (
                        <div
                            key={key}
                            className="w-full h-fit bg-slate-800 rounded-xl p-3"
                        >
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl truncate">
                                    {team.name}
                                </h1>
                                <Link
                                    to={'/team/' + team.name}
                                    className="hover:bg-slate-300 hover:text-slate-800 transition-all duration-300 rounded-full px-3 pt-[2px] flex"
                                >
                                    More
                                </Link>
                            </div>
                            <span className="text-slate-400 text-sm truncate">
                                {team.subject}
                            </span>
                            <div className="flex w-full overflow-hidden gap-3 p-3">
                                {team.members.map((member, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={member.image}
                                            alt={member.name}
                                            className="h-16 aspect-square rounded-full object-cover"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Page_Layout>
    )
}

export default ManageTeam
