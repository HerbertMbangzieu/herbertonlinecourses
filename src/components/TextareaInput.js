import { useState, useEffect, useRef } from 'react'

const TextareaInput = (props) => {
  
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
        <textarea 
        type="text" 
        required
        // ref={props.value && inputRef.current}
        id="input" 
        rows={5}
        defaultValue={props.value && props.value} 
        className='px-2 border-[1px] border-gray-secondary w-full rounded-md mt-2'
        onChange={handleChange}></textarea>
         
    </div>
  )
}

export default TextareaInput