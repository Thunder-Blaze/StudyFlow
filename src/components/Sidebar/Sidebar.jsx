import React from 'react'

function Sidebar() {

    const UserName = 'Sujit';
    const Proffession = 'Student';

  return (
    <div className='h-screen min-w-screen md:min-w-[16rem] bg-slate-900'>
        <div className='flex flex-col'>
            <img src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg" alt="PFP" className='aspect-square rounded-full w-40 m-auto mt-8 object-cover' />
            <h2 className='m-auto mt-2 text-2xl text-slate-100 font-bold'>{UserName}</h2>
            <h2 className='m-auto text-md text-slate-300'>{Proffession}</h2>
        </div>
    </div>
  )
}

export default Sidebar