import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 shadow-md h-20 bg-gray-800 text-gray-100'>
       <h2 className='text-2xl font-semibold'>Simple React Landing</h2>
       <div>
        <ul className='flex gap-2 items-center'>
            <li className='cursor-pointer hover:text-gray-600'>Home</li>
            <li className='cursor-pointer hover:text-gray-600'>About</li>
            <li className='cursor-pointer hover:text-gray-600'>Contact</li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar