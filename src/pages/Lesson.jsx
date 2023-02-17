import React from 'react'
import LessonCard from '../components/LessonCard/LessonCard'
import data from "../helper/data"
import "./Lesson.css"
const Lesson = () => {
  return (
    <div className='general'>
              {data.map((item)=>{
        //! Destr
        const{image,name,age} = item

        return   <LessonCard  image={image} name={name} age={age}/>
      })}
    
       
    </div>
  )
}

export default Lesson