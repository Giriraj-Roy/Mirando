import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>MIRANDO</h1>
        <div>
            <button className='text-white pr-4'>Sign IN</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign OUT</button>
        </div>
    </div>
  )
}

export default Navbar