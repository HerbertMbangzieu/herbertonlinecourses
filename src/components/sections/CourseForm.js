import React, { useEffect, useState } from 'react'
import Alert from '../Alert'
import TextInput from '../TextInput'
import Button from '../Button'

const CourseForm = (props) => {

  const [title, setTitle] = useState(null)
  const [type, setType] = useState('success')
  const [messageType, setMessageType] = useState('success')
  const [message, setMessage] = useState(null)
  const [author, setAuthor] = useState(null)
  const [course, setCourse] = useState(null)
  const [school, setSchool] = useState(props.activeSchool)

  useEffect(()=>{
    console.log(course)
  },[course])

  const handleSubmit = (e) => {
    e.preventDefault()
    const index = school.specialties.findIndex((specialty)=>{ return specialty === props.specialty})
    if(props.course ){
      const lessons = props.course.lessons
      const id = props.specialty.courses.findIndex((crs)=>{ return crs === props.course})
      school.specialties[index].courses[id].title = title
      school.specialties[index].courses[id].author = author

    }
    else{
      setCourse({title, author, 'lessons':[]})
      school.specialties[index].courses.push({title, author, 'lessons':[]})
      console.log(school)
    }

    fetch('http://localhost:5000/schools/'+school.id,{
      method: 'PUT',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(school)
    })
    .then(
      res => {
        return res.json()
      }
    )
    .then( data => {
      props.course ? setMessage('Modification effectuée') : setMessage('Enregistrement effectuée')
      props.course ? setType('info') : setType('success')
  })
  .catch(err => {
      setMessage(err.message)
      setType('danger')
  })


  }

  return (
    <div>
      {message && <Alert message={message} type={messageType} />}
      
      <form className='p-3 border-[1px] pb-5 rounded' onSubmit={handleSubmit}>
      <h3 className='text-xl text-center font-semibold pb-3 mb-2 border-b-[1px]'> {props.course ? 'Modifier' : 'Ajouter'} </h3>
        <TextInput name='title' setValue = {setTitle} value={props.course && props.course.title} />
        <TextInput name='author' setValue = {setAuthor} value={props.course && props.course.author} />
        <button className="w-full mt-2">
        <button className='w-full'>
                <Button text={props.course ? 'Editer' : 'Ajouter'} type={props.course ? 'info' : 'success'}/>
            </button>
        </button>
      </form>

    </div>
  )
}

export default CourseForm