import React, { useState } from 'react'
import TextInput from '../TextInput'
import TextareaInput from '../TextareaInput'
import Button from '../Button'
import Alert from '../Alert'

const SchoolForm = (props) => {
    const [message, setMessage] = useState(null)
    const [type, setType] = useState('info')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')

    let method = 'POST'
    let headTitle = 'Ajouter une école'
    let url = 'http://localhost:5000/schools'
    if(props.school){
      method = 'PUT'
      url = 'http://localhost:5000/schools/'+props.school.id
      headTitle = 'Modifier une école'
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const school = {name, code, description, logo: code+'.png', specialties: []}
      fetch(url, {
        method: method,
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(school)
      })
      .then(res =>{
        if(!res.ok){
          throw Error('Something went wrong')
        }
         res.json()
        })
      .then( data => {
          setMessage('Enregistrement effectué')
          props.school ? setType('info') : setType('success')
      })
      .catch(err => {
          setMessage(err.message)
          setType('danger')
      })
    }



  return (
    <div className=''>
        { message && <div> <Alert message={message} type={type}/> </div> }
        <h1 className="font-semibold text-xl pb-3 border-b-[1px] border-b-gray-secondary mb-4 text-center"> {headTitle} </h1>
        <form className='px-2 py-4 rounded border-gray-secondary border-[1px]' onSubmit={handleSubmit}>
            <TextInput name = 'nom' setValue={setName} value = {props.school && props.school.name}/>
            <TextInput name = 'code' setValue={setCode} value = {props.school && props.school.code}/>
            <TextareaInput name = 'description' setValue= {setDescription} value = {props.school && props.school.description}/>
            <button className='w-full'>
                <Button text={props.school ? 'Editer' : 'Ajouter'} type={props.school ? 'info' : 'success'}/>
            </button>
        </form>
    </div>
  )
}

export default SchoolForm