import React from 'react'

const Exercise = ({exercise}) => {
  return (
    <div>
        
        <div>
            <h1 className='text-center font-semibold pb-3 border-b-[1px] border-b-gray-light'> Exercise  </h1>
            <div className='text-justify pb-3 border-b-2 border-b-gray-light' dangerouslySetInnerHTML={{__html: exercise.text}} />
            <div>
                {
                    Exercise.questions.map((question, index) => (
                        <div>
                            {(index + 1)+'. '+ question}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Exercise