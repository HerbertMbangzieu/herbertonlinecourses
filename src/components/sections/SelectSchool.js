import {useState, useEffect} from 'react'

const SelectSchool = (props) => {
    const [school, setSchool] = useState(null)
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
    })
  return (
    <div>
        <div className="flex">
            { loading && <p>Chargement ...</p>}
            { error && <p>{error}</p>}
            {
                schools && 
                <div className=''>
                    
                <h3 className="text-lg">Selectionner une école</h3>
                <div className='w-full flex'>
                    {
                        schools.map((school, index)=> (
                            <div 
                            key={index}
                            onClick={()=> props.setSchool(school)}
                            className='px-4 py-1 rounded-full text-[12px] bg-gray-dark text-white font-semibold shadow-lg shadow-gray-900 m-3 cursor-pointer active:scale-95'>
                                {school.name}
                            </div>
                        ))
                    }
                </div>
                
                
                
                </div>
            }
        </div>
    </div>
  )
}

export default SelectSchool