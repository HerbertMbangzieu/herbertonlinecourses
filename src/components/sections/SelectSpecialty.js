import React, { useEffect, useState } from 'react'
import SelectInput from '../SelectInput'

const SelectSpecialty = (props) => {
  const [school, setSchool] = useState(null)
  
  useEffect(()=>{
    props.setActiveSchool(school);
  },[school])
  
  return (
    <div className='w-full flex'>
      <div className="w-1/2">
        <SelectInput name="école" data={props.schools} setValue={setSchool}/>
      </div>

      <div className="w-1/2">
        {school && <SelectInput name="spécialité" data={school.specialties} setValue={props.setSpecialty}/>}
      </div>


    </div>
  )
}

export default SelectSpecialty