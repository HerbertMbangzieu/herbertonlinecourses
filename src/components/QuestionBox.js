import React from 'react'

const QuestionBox = ({question,number}) => {
  return (
    <div className='rounded-md border-[1px] border-gray-secondary w-full'>
        <p className="text-center font-bold text-white bg-gray-primary rounded-t-md"> Question {number} </p>
        <div className="p-2">
        <h3 className="font-semibold pb-2 border-b-[1px] border-b-gray-light"> {question.label} </h3>
        <div className="mt-2">
            {
                question.answers.map((answer, index) => (
                    <div key={index} className='my-1'>
                        <input type="radio" name="radio" id={"answer"+number+index} className='mr-2' value={index} /> <label htmlFor={"answer"+number+index}> {answer} </label>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default QuestionBox