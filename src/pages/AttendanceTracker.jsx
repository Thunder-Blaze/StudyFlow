import Page_Layout from './Page_Layout'
import AttendanceChart from '../components/Charts/AttendanceChart'
import Attendance from '../data/Attendance_Data.json'

const AttendanceTracker = () => {
    return (
        <Page_Layout>
            <div className="p-4 pt-0 w-full h-full flex items-center justify-center flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-wider mb-4">
                    Attendance
                </h1>
                <div className="flex flex-wrap gap-6 items-center justify-evenly">
                    {Attendance.map((sub, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-slate-800 min-w-[20rem] flex-1 p-8 flex rounded-xl justify-between"
                            >
                                <div className="flex flex-col justify-center">
                                    <h1>{sub.name}</h1>
                                    <span className="font-normal text-lg">
                                        Present {sub.present}
                                    </span>
                                    <span className="font-normal text-lg">
                                        Absent: {sub.absent}
                                    </span>
                                </div>
                                <AttendanceChart
                                    absent={sub.absent}
                                    present={sub.present}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Page_Layout>
    )
}

export default AttendanceTracker
