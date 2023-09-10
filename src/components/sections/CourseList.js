import React from 'react'

const CourseList = (props) => {
  return (
    <div className=' px-2 '>
        <div className="w-full flex pb-3 border-b-[1px] border-b-gray-secondary">
            <h2 className="w-full font-semibold text-xl"> Liste des cours </h2>
            <div className="w-full flex justify-end">
                <p className="text-blue-secondary cursor-pointer" onClick={()=>props.setActiveCourse({}, 'create')}> + ajouter un cours </p>
            </div>
        </div>

        <div>
            {
                props.specialty.courses.map((course, index) => (
                    <div key={index}
                    onClick={()=> props.setActiveCourse(course, 'show')}
                     className='cursor-pointer py-2 hover:bg-gray-800 hover:text-white active:scale-95 border-b-[1px]'>
                        <h2 className="font-semibold"> {index + 1}. {course.title} </h2>
                        <div className="w-full flex text-gray-secondary pb-2">
                            <div className="w-full"> par {course.author} </div>
                            <div className="w-full flex justify-end px-2"> {course.lessons.length} lecons </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CourseList