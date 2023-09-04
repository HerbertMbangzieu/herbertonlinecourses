import React, { useState } from 'react'
import {BsXCircle} from 'react-icons/bs'

const Alert = ({message, type}) => {
    const [show, setShow] = useState(true)
  return (
    <div>
    {show && <div
    className={
            type === 'success' ? 'text-green-dark bg-green-light p-2 w-full text-center flex':
            (type === 'danger' ? 'text-red-dark bg-red-light p-2 w-full text-center flex':
            (type === 'warning' ? 'text-orange-dark bg-orange-light p-2 w-full text-center flex':
            'text-blue-dark bg-blue-light p-2 w-full text-center flex'))
        }
        > 
        <p className="w-full"> {message} </p> 
        <p className='mt-1 cursor-pointer' onClick={() => setShow(false)}> <BsXCircle/> </p>
        
    </div>}
    </div>
  )
}

export default Alert