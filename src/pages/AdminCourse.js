import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import SelectSpecialty from '../components/sections/SelectSpecialty'
import CourseList from '../components/sections/CourseList'
import CourseForm from '../components/sections/CourseForm'
import CourseDetails from '../components/sections/CourseDetails'

const AdminCourse = () => {
    const [course, setCourse] = useState(null)
    const [activeSchool, setActiveSchool] = useState(null)
    const [specialty, setSpecialty] = useState(null)
    const [create, setCreate] = useState(false)
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [destroy, setDestroy] = useState(false)
    const [schools, setSchools] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/schools')
        .then(
          res =>{
            if(!res.ok){
              throw Error('Resources not loaded')
            }
            return res.json()
          }
        )
        .then(data =>{
          setSchools(data)
          setLoading(false)
        })
        .catch(err=>{
          setError(err.message)
          setLoading(false)
        })
    
        return () => console.log('cleanup');
        
      })

    const setActiveCourse =  (activeCourse, status) => {
        if(status === 'show'){
            setShow(true)
            setCreate(false)
            setEdit(false)
            setDestroy(false)
            setCourse(activeCourse)
        }
        else if(status === 'create'){
            setShow(false)
            setCreate(true)
            setEdit(false)
            setDestroy(false)
        } 
        else if(status === 'edit'){
            setShow(false)
            setCreate(false)
            setEdit(true)
            setDestroy(false)
            setCourse(activeCourse)
        }
        else if(status === 'destroy'){
            setShow(false)
            setCreate(false)
            setEdit(false)
            setDestroy(true)
            setCourse(activeCourse)
        }
    }

  return (
    <div>
        <AdminNavbar/>
        <div>
            {schools && <SelectSpecialty setActiveSchool={setActiveSchool} schools = {schools} setSpecialty={setSpecialty} />}
        </div>

        <div className='w-full flex'>
            <div className="w-1/2">
                { specialty && <CourseList specialty={specialty} setActiveCourse={setActiveCourse} /> }
            </div>

            <div className="w-1/2">
                {create && <CourseForm  activeSchool = {activeSchool} specialty={specialty}/> }
                {edit && <CourseForm activeSchool = {activeSchool} specialty={specialty} course= {course}/> }
                {show && <CourseDetails course={course} setActiveCourse={setActiveCourse} />}
            </div>
        </div>
    </div>
  )
}

export default AdminCourse