import React from 'react'
import { DiZend } from 'react-icons/di'

const Announcement = () => {
    const Updates=[
        {   image: "https://www.svgrepo.com/show/496446/note-text.svg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        },

        {
            image: "https://www.svgrepo.com/show/496446/note-text.svg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        },

        {
            image: "https://www.svgrepo.com/show/496446/note-text.svg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur omnis id possimus magni ducimus quo eos, voluptate dolorum asperiores ex voluptatem veritatis recusandae accusamus odit nulla aliquam rerum nisi."
        }
    ]
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between p-4'>
            <h1>Announcements</h1>
            <button>View All</button>
        </div>
       

        <div>
            {
                Updates.map((info,key)=>{
                    return(
                        <div key={key} className='bg-gray-800 rounded-2xl  p-7 border-2 border-solid border-gray-500 text-white flex flex-row justify-between gap-3' >

                            <div className='flex items-center justify-center'>
                                <img src={info.image} alt={info.name} className={`w-20 aspect-square object-contain ${info.image?'invert grayscale':' ' }`} />
                            </div>

                            <div >
                               
                                <p  className='text-xl p-0.5'>{info.description}</p>
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
