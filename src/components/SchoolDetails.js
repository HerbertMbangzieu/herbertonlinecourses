import React from 'react'
import Button from './Button'

const SchoolDetails = ({school, setActiveSchool}) => {
    console.log(school);
  return (
    <div className='rounded-lg border-[1px] p-2'>
        <h1 className="font-semibold text-xl pb-3 border-b-[1px] border-b-gray-light"> Détails de l'école</h1>
        <div className="w-full flex py-2 border-b-[1px] border-b-gray-light">
            <div className="w-1/3 font-semibold"> Nom </div>
            <div className="w-2/3"> {school.name} </div>
        </div>

        <div className="w-full flex py-2 border-b-[1px] border-b-gray-light">
            <div className="w-1/3 font-semibold"> Code </div>
            <div className="w-2/3"> {school.code} </div>
        </div>

        <div className="w-full flex py-2 border-b-[1px] border-b-gray-light">
            <div className="w-1/3 font-semibold"> description </div>
            <div className="w-2/3"> {school.description} </div>
        </div>

        <div className="flex justify-center py-2">
            <div className='mx-1 w-full' onClick = {()=>setActiveSchool(school, 'edit')}> <Button text='modifier' type={'info'}/> </div>
            <div className='mx-2 w-full' onClick = {()=>setActiveSchool(school, 'destroy')}> <Button text='supprimer' type={'danger'}/> </div>
        </div>



    </div>
  )
}

export default SchoolDetails