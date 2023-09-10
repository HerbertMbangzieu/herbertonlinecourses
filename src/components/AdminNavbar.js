import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='w-full flex p-2 pb-3 border-b-[1px] border-b-gray-secondary'>
        <div className="w-full">
            <Link to = '/admin/schools' className='font-bold p-2 text-lg'> herbertmbangzieu  </Link>
        </div>
        <div className="w-full flex justify-end">
            <Link to='/admin/schools' className='font-semibold mx-3 p-2 rounded-md hover:bg-gray-dark hover:text-white'> Écoles </Link>
            <Link to='/admin/specialties' className='font-semibold mx-3 p-2 rounded-md hover:bg-gray-dark hover:text-white'> Spécialités </Link>
            <Link to='/admin/courses' className='font-semibold mx-3 p-2 rounded-md hover:bg-gray-dark hover:text-white'> Cours </Link>
        </div>
    </div>
  )
}

export default AdminNavbar