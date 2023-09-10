import React, { useEffect, useRef, useState } from 'react'

const TextInput = (props) => {
  const [input, setInput] = useState(props.value)
  useEffect(()=>{
    props.setValue && props.setValue(input)
  },[input])
  const handleChange = (e) => {
    setInput(e.target.value) 
    props.setValue(e.target.value) 
  }
  return (
    <div className='py-2'>
        <label htmlFor="input" className='font-semibold mb-3'> {props.name} </label>
        <input 
        type="text" 
        required
        // ref={props.value && inputRef.current }
        id="input" 
        defaultValue={input} 
        className='px-2 border-[1px] border-gray-secondary w-full rounded-md mt-2'
        onChange={handleChange}
         />
    </div>
  )
}

export default TextInput