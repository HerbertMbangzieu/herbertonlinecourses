import React, { useState } from 'react'
import Button from '../Button'

const DeleteCourse = (props) => {
    const [courses, setCourses] = useState()
    const [show, setShow] = useState(true)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const index = props.activeSchool.specialties.findIndex((specialty)=>{ return specialty === props.specialty})
        const id = props.specialty.courses.findIndex((crs)=>{ return crs === props.course})
        props.activeSchool.specialties[index].courses.splice(id, 1)

        fetch('http://localhost:5000/schools/'+props.activeSchool.id,{
      method: 'PUT',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(props.activeSchool)
    })
    .then(
      res => {
        return res.json()
      }
    )
    .then( data => {
      props.setDeletedMessage('le cours'+props.course.title+'a été définitivement Supprimé')
      props.setDeleted(true)
  })
  .catch(err => {
      props.setDeletedMessage(err.message)
      props.setDeleted(true)
  })
  setShow(false)
    }
  return (
    <div>
    { show &&
    <div className='w-full h-screen absolute bg-white bg-opacity-90 top-0 left-0 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="w-1/2 bg-white text-center py-10 shadow-lg shadow-gray-dark">
            <div className="text-xl">Supprimer le cours <span className="text-red-primary font-semibold">{props.course.title}</span></div>
            <div className="w-full flex mt-5 p-4">
                <button className="w-full mx-2"><Button text={'Supprimer'} type={'danger'}/> </button>
                <div className="w-full mx-2" onClick={()=>props.setActiveCourse(props.course, 'show')}><Button text={'Annuler'}/> </div>
            </div>
        </form>
    </div>
    }
    </div>
  )
}

export default DeleteCourse