import {useState, useEffect} from 'react'
import { AdminNavbar } from '../components'
import SelectSchool from '../components/sections/SelectSchool'
import SpecialtyList from '../components/sections/SpecialtyList'
import SpecialtyForm from '../components/sections/SpecialtyForm'
import SpecialtyDetails from '../components/sections/SpecialtyDetails'
import DeleteSpecialty from '../components/sections/DeleteSpecialty'


const AdminSpecialty = () => {
    const [school, setSchool] = useState(null)
    const [specialty, setSpecialty] = useState(null)
    const [create, setCreate] = useState(false)
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)
    const [destroy, setDestroy] = useState(false)

    const setActiveSpecialty = (activeSpecialty, status) =>{
        if(status === 'create'){
            setCreate(true)
            setEdit(false)
            setShow(false)
            setDestroy(false)
        }
        else if(status === 'show'){
            setCreate(false)
            setEdit(false)
            setShow(true)
            setDestroy(false)
            setSpecialty(activeSpecialty)
        }
        else if(status === 'edit'){
            setCreate(false)
            setEdit(true)
            setShow(false)
            setDestroy(false)
            setSpecialty(activeSpecialty)
        }
        else if(status === 'destroy'){
            setCreate(false)
            setEdit(false)
            setShow(false)
            setDestroy(true)
            setSpecialty(activeSpecialty)
        }
        else{
            setCreate(false)
            setEdit(false)
            setShow(false)
            setDestroy(false)
            setSpecialty(null)
   }

    }
    
  return (
    <div>
        <AdminNavbar/>
        
        {destroy && <DeleteSpecialty school={school} specialty={specialty} setActiveSpecialty={setActiveSpecialty}/> }
        <SelectSchool setSchool={setSchool}/>

        <div className="flex">
            <div className="w-2/3">
                {school && <SpecialtyList school={school} setActiveSpecialty={setActiveSpecialty}/>}
            </div>

            <div className="w-1/3 px-2">
               {create && <SpecialtyForm school={school}/>}
               {edit && <SpecialtyForm school={school} specialty={specialty}/>}
               {show && <SpecialtyDetails specialty={specialty} setActiveSpecialty={setActiveSpecialty}/> }
            </div>
        </div>

    </div>
  )
}

export default AdminSpecialty