import React from 'react'
import Button from '../Button'

const SpecialtyDetails = (props) => {
  return (
    <div className='rounded-lg border-[1px] p-2'>
        <h1 className="font-semibold text-xl pb-3 border-b-[1px] border-b-gray-light"> Détails de la spécialité</h1>
        <div className="w-full flex mb-3">
            <div className="w-1/3 font-semibold"> Nom : </div>
            <div className="w-2/3"> {props.specialty.name} </div>
        </div>
        <div className="w-full flex mb-3">
            <div className="w-1/3 font-semibold"> code : </div>
            <div className="w-2/3"> {props.specialty.code} </div>
        </div>
        <div className="w-full flex mb-3">
            <div className="w-1/3 font-semibold"> courses : </div>
            <div className="w-2/3"> {props.specialty.courses.length} </div>
        </div>

        <div className="w-full flex mb-3">
            <div className="w-full mx-1" onClick={()=> props.setActiveSpecialty(props.specialty, 'edit')}> <Button text={'Modifier'} type={'info'}/> </div>
            <div className="w-full mx-1" onClick={()=> props.setActiveSpecialty(props.specialty, 'destroy')}> <Button text={'Supprimer'} type={'danger'}/> </div>
        </div>


    </div>
  )
}

export default SpecialtyDetails