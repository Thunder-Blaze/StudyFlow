import React from 'react'
import { FaBell, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({UserInfo}) => {
  return (
    <div className='p-3 flex w-full justify-between gap-4'>
        <div className='w-full max-w-[20rem] relative'>
            <FaSearch className="text-gray-500 absolute left-3 top-4" />
            <input
                type="text"
                placeholder='Search'
                className='outline-none m-1 p-2 pl-8 bg-gray-900 w-full min-w-0 rounded-lg'
            />
        </div>
        <div className='flex gap-4 shrink-0'>
            <img src={UserInfo.image} className='h-12 aspect-square object-cover rounded-full' />
            <div className='flex flex-col justify-center'>
                <span className='font-bold'>{UserInfo.name}</span>
                <span className='text-gray-400 text-sm font-medium'>{UserInfo.position}</span>
            </div>
            <div className='h-full flex justify-center items-center'>
                <Link to="/announcements" className='relative cursor-pointer'>
                    <div className='w-2.5 h-2.5 bg-red-500 absolute top-0 right-0 rounded-full'></div>
                    <FaBell className='w-6 h-6' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar