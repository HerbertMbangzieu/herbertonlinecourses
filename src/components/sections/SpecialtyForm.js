import React, { useState } from 'react'
import Alert from '../Alert'
import Button from '../Button'
import TextInput from '../TextInput'

const SpecialtyForm = (props) => {
    const [name, setName] = useState(props.specialty)
    const [code, setCode] = useState(props.specialty)
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)
    let headTitle
    props.specialty ? headTitle = 'Modification' : headTitle = 'Ajout'

    const handleSubmit = (e) => {
        e.preventDefault()
        const specialty = {name, code, 'courses':[]}
        let index;
        if(props.specialty) {
            specialty.courses = props.specialty.courses
            index = props.school.specialties.findIndex((spec)  => { return spec === props.specialty })
            props.school.specialties[index] = specialty
            setType('info')
        } else {
            props.school.specialties.push(specialty)
            setType('success')
        }

        fetch('http://localhost:5000/schools/'+props.school.id, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(props.school)
        })
        .then(
            res =>{
                if(!res.ok){
                    throw Error('Something went wrong')
                }
                res.json()
            }
        )
        .then( data => {
            setMessage('Enregistrement effectué')
        })
        .catch(err =>{
            setMessage(err.message)
        })
    }
  return (
    <div>
    { message && <div> <Alert message={message} type={type}/> </div> }
    <h1 className="font-semibold text-xl pb-3 border-b-[1px] border-b-gray-secondary mb-4 text-center"> {headTitle} </h1>
        <form className='px-2 pb-8 rounded border-gray-secondary border-[1px]' onSubmit={handleSubmit}>
            <TextInput name = {'nom'} value = {props.specialty && props.specialty.name} setValue={setName}/>
            <TextInput name = {'code'} value = {props.specialty && props.specialty.code} setValue={setCode}/>
            <button className='w-full'>
                <Button text={props.specialty ? 'Editer' : 'Ajouter'} type={props.specialty ? 'info' : 'success'}/>
            </button>
        </form>
    </div>
  )
}

export default SpecialtyForm