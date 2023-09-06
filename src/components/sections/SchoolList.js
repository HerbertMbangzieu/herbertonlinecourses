import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks'
import SchoolCard from '../SchoolCard'


const SchoolList = (props) => {
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

  const countCourses = (i) => {
    let nbCourses = []
    for(let school of schools){
      let cntcrs = 0
      for(let specialty of school.specialties) {
        cntcrs += (specialty.courses.length) 
      }
      nbCourses.push(cntcrs)
    }
    return nbCourses[i]
  }
  
  return (
    <div>
        <div className="w-full flex pb-3 border-b-[1px] border-b-gray-secondary">
            <h2 className="w-full font-semibold text-xl"> Liste des écoles </h2>
            <div className="w-full flex justify-end">
                <p className="text-blue-secondary cursor-pointer" onClick={()=>props.setActiveSchool({}, 'create')}> + ajouter un école </p>
            </div>
        </div>

        <div className="mt-2">
          {loading && <p>Chargement</p>}
        { schools && 
          <div>
            <div className="w-full flex pb-1 border-b-2">
              <div className="h3 font-bold w-1/2"> Nom de l'établissement</div>
              <div className="h3 font-bold w-1/4 text-center">Spécialités</div>
              <div className="h3 font-bold w-1/4 text-center">Cours</div>
            </div>
            {
            schools.map((school, index) => (
                <div className="w-full cursor-pointer flex py-3 border-b-[1px] border-b-gray-light" key={index} onClick={() => props.setActiveSchool(school, 'show')}> 
                  
                    <div className="w-1/2 font-semibold"> {school.name} </div>
                    <div className="w-1/4 text-center"> {school.specialties.length} </div>
                    <div className="w-1/4 text-center"> {countCourses(index)} </div>
                  
                </div>
            ))
            }

          </div>
        }
        {error && <p> {error} </p>}
        </div>
    </div>
  )
}

export default SchoolList