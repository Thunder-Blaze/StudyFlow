import User_Schedule from '../../data/User_Schedule.json'

const Schedule = () => {
    return (
        <div className="w-full p-5 pt-3">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-xl">My Schedule</h1>
            </div>
            <div className="flex flex-col pt-4 gap-4">
                {User_Schedule.map((schedule, key) => {
                    return (
                        <div
                            key={key}
                            className="bg-gray-800 rounded-2xl p-4 py-3 border-l-6 border-solid border-gray-500 text-slate-200 flex gap-1 flex-col justify-between"
                        >
                            <div className="flex">
                                <h2 className="text-lg font-semibold truncate">
                                    {schedule.subject}
                                </h2>
                            </div>
                            <div className="flex flex-row gap-1 justify-between">
                                <span className="text-sm">
                                    {schedule.teacher}
                                </span>
                                <span className="text-sm">{schedule.time}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Schedule
