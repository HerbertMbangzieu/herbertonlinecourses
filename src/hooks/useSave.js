import { useState } from 'react'

const useSave = ({url, body}) => {
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)

    const save = (url, body) =>{
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then( data => {
            setMessage('Enregistrement effectué')
            setType('success')
        })
        .catch(err => {
            setMessage(err.message)
            setType('danger')
        })
    }


  return {message, type, save}
}

export default useSave