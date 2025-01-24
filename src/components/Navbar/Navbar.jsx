import React from 'react'
import { FaBell } from "react-icons/fa6";

const Navbar = ({UserInfo}) => {
  return (
    <div className='p-3 flex w-full justify-between'>
        <input 
            type="text"
            placeholder='Search'
            className='outline-none m-1 p-2 bg-gray-900 w-full max-w-[20rem] rounded-lg'
        />
        <div className='flex gap-4 shrink-0'>
            <img src={UserInfo.image} className='h-12 aspect-square object-cover rounded-full' />
            <div className='flex flex-col justify-center'>
                <span className='font-bold'>{UserInfo.name}</span>
                <span className='text-gray-400 text-sm font-medium'>{UserInfo.position}</span>
            </div>
            <div className='h-full flex justify-center items-center'>
                <div className='relative'>
                    <div className='w-2.5 h-2.5 bg-red-500 absolute top-0 right-0 rounded-full'></div>
                    <FaBell className='w-6 h-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar