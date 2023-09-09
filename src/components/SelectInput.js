import React, { useState } from 'react'

const SelectInput = (props) => {
    const [items, setItems] = useState(props.data)
    const handleChange = (e) => {
        props.setValue(props.data[e.target.value])
        // console.log(e.target.v);
    }
  return (
    <div className='my-2 mx-5'>
        <label htmlFor="input" className=''> Sélectionnez votre {props.name} </label>
        <select 
        required
        onChange={handleChange}
        name="" id="input" className='w-full p-1 border-[1px] border-gray-secondary rounded-md'>
            <option value="" disabled selected>  </option>
            {
                items.map((item, index)=>
                <option value={index} key={index}> {item.name} </option>
                )
            }
        </select>
    </div>
  )
}

export default SelectInput