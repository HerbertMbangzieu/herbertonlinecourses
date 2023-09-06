import React, { useEffect, useState } from 'react'
import { AdminNavbar, SchoolForm, SchoolList } from '../components'
import SchoolDetails from '../components/SchoolDetails'
import DeleteSchool from '../components/sections/DeleteSchool'

const AdminSchool = () => {
    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    const [school, setSchool] = useState(null)
    const [edit, setEdit] = useState(false)
    const [destroy, setDestroy] = useState(false)

    const setActiveSchool = (activeSchool, status) => {
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
            setSchool(activeSchool)
        }
        else if(status === 'edit'){
            setCreate(false)
            setEdit(true)
            setShow(false)
            setDestroy(false)
            setSchool(activeSchool)
        }
        else if(status === 'destroy'){
            setCreate(false)
            setEdit(false)
            setShow(false)
            setDestroy(true)
            setSchool(activeSchool)
        }
        else{
            setCreate(false)
            setEdit(false)
            setShow(false)
            setDestroy(false)
            setSchool(null)
        }

    }

  return (
    <div>
        <AdminNavbar/>
        {destroy && <DeleteSchool school={school} setActiveSchool={setActiveSchool}/>}
        <div className="mt-3 w-full flex">
            <div className="w-2/3 px-3">
                <SchoolList setActiveSchool={setActiveSchool}/>
            </div>

            <div className="w-1/3 px-3">
                { create && <SchoolForm/> }
                { show && <SchoolDetails school={school} setActiveSchool={setActiveSchool}/>}
                { edit && <SchoolForm school={school}/>}
                { }
            </div>
        </div>
    </div>
  )
}

export default AdminSchool