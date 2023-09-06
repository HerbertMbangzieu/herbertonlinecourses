import React from 'react'

const SpecialtyList = (props) => {
  return (
    <div>
        <div className="flex py-3">
          <h1 className="text-xl w-full font-semibold"> Liste des Spécialités</h1>
          <div 
          className="w-full flex justify-end  pr-3"> <p 
          onClick={()=>props.setActiveSpecialty({}, 'create')}
          className="text-blue-secondary cursor-pointer">+ ajouter une spécialité</p></div>
        </div><hr />

        <div className="flex flex-wrap p-4">
            { 
                props.school.specialties.map((specialty, index) => <div
                className='bg-red-dark text-white font-semibold py-3 px-5 cursor-pointer rounded-lg shadow-lg shadow-gray-primary m-2 active:scale-95' 
                onClick={()=> props.setActiveSpecialty(specialty, 'show')}
                key={index}>
                    {specialty.name}
                </div>)
            }
        </div>
    </div>
  )
}

export default SpecialtyList