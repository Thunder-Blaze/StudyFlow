function CourseInstructors() {
    const instructors = [
        {
            name: 'Prashant Singh',
            image: 'https://iiitl.ac.in/wp-content/uploads/2022/04/Mr.-Prashant-Singh-300x258.jpg.webp',
            link: 'https://iiitl.ac.in/index.php/personnel/prashant-singh/',
        },
        {
            name: 'Rahul Kumar Verma',
            image: 'https://iiitl.ac.in/wp-content/uploads/2021/08/Dr.-Rahul-Kr.-Verma-300x277.jpg',
            link: 'https://iiitl.ac.in/index.php/personnel/10153/',
        },
        {
            name: 'Bibek Singh',
            image: 'https://iiitl.ac.in/wp-content/uploads/2021/10/MR.-BIBEK-SINGH-300x285.jpg.webp',
            link: 'https://iiitl.ac.in/index.php/personnel/mr-bibek-singh/',
        },
    ]

    return (
        <div className="p-2 pr-4 pl-0">
            <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-xl">Course Instructors</h1>
                <button className="cursor-pointer font-semibold text-gray-400 transition-all duration-300 px-4 py-0.5 rounded-full hover:bg-gray-200 hover:text-gray-800">
                    See All
                </button>
            </div>
            <div className="flex flex-wrap justify-between pt-3 px-2 gap-3">
                {instructors.map((instructor, index) => (
                    <a
                        key={index}
                        className="no-underline"
                        href={instructor.link}
                        rel="noopener"
                        target="_blank"
                    >
                        <div className="">
                            <img
                                src={instructor.image}
                                alt={instructor.name}
                                className="w-20 aspect-square object-cover rounded-full border-4 border-solid border-gray-500"
                            />
                        </div>
                        <p className="text-sm my-2 truncate max-w-20">
                            {instructor.name}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CourseInstructors
