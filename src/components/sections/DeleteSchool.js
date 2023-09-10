import Button from '../Button'

const DeleteSchool = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/schools/'+props.school.id, {
            method: 'DELETE'
        })

        props.setActiveSchool({})
    }

  return (
    <div className='w-full h-screen absolute bg-white top-0 bg-opacity-90 flex items-center justify-center'>
        <div className="w-1/2 flex h-1/3 items-center bg-white bg-opacity-100 shadow-lg shadow-gray-secondary">
            <form className="w-full px-12" onSubmit={handleSubmit}>
                <h1 className="text-lg font-semibold text-center"> Supprimer l'école <span className='text-red-primary'>{props.school.name}</span> </h1>
                <div className="w-full flex">
                <button className="px-3 mt-10 w-full"> <Button text={'Supprimer'} type={'danger'} /> </button>
                <div onClick={()=> props.setActiveSchool(props.school,'show')} className="px-3 mt-10 w-full"> <Button text={'Annuler'} /> </div>
            
                </div>
            </form>
        </div>
    </div>
  )
}

export default DeleteSchool