import React, { useEffect, useState } from 'react'

const Button = ({text, type}) => {

const [background, setBackground] = useState('bg-gradient-to-b from-gray-secondary to-gray-primary text-black')

useEffect(()=>{
    if(type === 'success'){
        setBackground('bg-gradient-to-b from-green-secondary to-green-primary text-white')
    }
    else if(type === 'danger'){
        setBackground('bg-gradient-to-b from-red-secondary to-red-primary text-white')
    }
    else if(type === 'warning'){
        setBackground('bg-gradient-to-b from-orange-secondary to-orange-primary text-white')
    }
    else if(type === 'info'){
        setBackground('bg-gradient-to-b from-blue-secondary to-blue-primary text-white')
    }
})

    
    
  return (
    <div className={`text-center font-semibold py-1 rounded-lg shadow-lg shadow-gray-secondary ${background}`}>
        {text}
    </div>
  )
}

export default Button