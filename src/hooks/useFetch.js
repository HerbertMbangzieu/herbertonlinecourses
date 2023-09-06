import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [schools, setSchools] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then( res => {
            if(!res.ok){
                throw Error('Could not fetch the data for this resource')
            }
            res.json()
        })
        .then( data => {
            setSchools(data)
            setLoading(false)
            setError(null)
        } )
        .catch( err => {
            setLoading(false)
            setError(err.message)
        })
        return () => console.log('cleanup')
    })

    
  return {schools, loading, error}
}

export default useFetch