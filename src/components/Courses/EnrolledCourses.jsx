import React from 'react'

const EnrolledCourses = () => {

    const Enrolled_Courses=[
        {
            name: "Object Oriented Programming",
            image: "https://www.iconpacks.net/icons/1/free-pie-chart-icon-683-thumb.png",
            link: ""
        },

        {
            name: "Statistics and Probability",
            image: "https://images.vexels.com/media/users/3/157446/isolated/preview/383f43305de4fbc3c6a3bdfb25a1b758-marketing-graph-icon.png",
            link: ""
        }
    ]

  return (
    <div className='w-full' >
      <div className='w-full flex justify-between p-4'>
        <h1>Enrolled Courses</h1>
        <button>See All</button>
      </div>

      <div className='grid grid-cols-2 p-4 gap-4' >
        {
            Enrolled_Courses.map((course,key)=>{
                return (
                    <div key={key} className='bg-gray-800 rounded-2xl  p-7 border-6 border-solid border-gray-500 text-white flex flex-row justify-between'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-2xl'>{course.name}</h2>
                            <button className='text-xl text-center bg-gray-200 text-gray-800 px-4 py-0.5 rounded-full w-fit'>View</button>
                        </div>
                        <div>
                            <img src={course.image} alt={course.name} className={`h-20 w-20 ${course.image?'invert grayscale':''}`} />
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default EnrolledCourses

