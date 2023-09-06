import React from 'react'
import {FaSchool} from 'react-icons/fa'

const SchoolCard = ({school}) => {
  return (
    <div className='rounded-lg shadow-lg shadow-gray-secondary w-52 '>
        <h1 className="font-semibold text-center bg-red-dark text-white rounded-t-lg p-2"> {school.name} </h1>
        <div className="p-2 w-full flex justify-center text-gray-secondary pb-3 border-b-[1px] border-b-gray-light">
            <FaSchool className='h-36 w-36'/>
        </div>
        <div className="p-2 text-center rounded-b-lg bg-red-dark text-white font-semibold">
            <p> {school.specialties.length} Spécialités </p>
        </div>
    </div>
  )
}

export default SchoolCard