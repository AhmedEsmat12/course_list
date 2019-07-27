import React from 'react'
import './courseForm.css'

const CourseForm = (props) =>
{
  
    return(
            <form onSubmit={props.updateForm}>
                <input type="text"  onChange={props.updateCourse} />
                <button className="btn1" type="submit">add course</button>
         </form>

    )
}
export default CourseForm;