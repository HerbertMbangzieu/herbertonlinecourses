import React from 'react'
import Button from '../Button'

const CourseDetails = (props) => {
  return (
    <div className='px-5'>
      <div className="w-full flex py-4">
        <h3 className="font-semibold mr-6"> Titre</h3>
        <h3 className=""> {props.course.title} </h3>
      </div>

      <div>
        <h3 className="font-semibold mr-6 pb-2 border-b-[1px]"> Lecons</h3>
        {
          props.course.lessons.map((lesson, index) => (
            <div key={index} className='pb-2 border-b-[1px]'>
              <h3 className="font-semibold"> {lesson.title} </h3>
              <div className="w-full flex text-gray-600">
                <div className="w-full"> {0} QCM </div>
                <div className="w-full pr-3 flex justify-end"> {2} Exercices corrigés </div>
              </div>
            </div>
          ))
        }

        <div className="full flex justify-center mt-1">
          <div className="w-full mx-2" onClick={()=> props.setActiveCourse(props.course, 'edit')}> <Button text={'Modifier'} type={'info'} /> </div>
          <div className="w-full mx-2" onClick={()=> props.setActiveCourse(props.course, 'destroy')}> <Button text={'Supprimer'} type={'danger'} /> </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails