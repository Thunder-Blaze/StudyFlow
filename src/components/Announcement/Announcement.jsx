import { Link } from 'react-router-dom'

const Announcement = () => {
    const Updates=[
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        },
        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        },

        {
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        }
    ]
  return (
    <div className='w-full mt-5 p-2 pl-0 pr-4'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='font-bold text-xl'>Announcements</h1>
            <Link to={"/announcements"} className='cursor-pointer font-semibold text-gray-400 transition-all duration-300 px-4 py-0.5 rounded-full hover:bg-gray-200 hover:text-gray-800'>See All</Link>
        </div>
        <div className='flex flex-col gap-3 mt-4'>
            {
                Updates.map((info,key)=>{
                    return(
                        <div key={key} className='bg-gray-800 rounded-lg text-sm p-1 text-white flex flex-row justify-between gap-1.5' >
                            <div className='flex items-center justify-center shrink-0'>
                                <img src="https://www.svgrepo.com/show/496446/note-text.svg" alt="" className={`w-6 ml-1 aspect-square object-contain invert`} />
                            </div>
                            <div >
                                <p className='line-clamp-2 p-0.5 tracking-wider'>{info.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Announcement
