import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CourseForm = (props) => {
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.crVal} onChange={props.updateCourse} required/>
            <button type="submit">
                <FontAwesomeIcon icon={faPlus} />
                Add
            </button>
        </form>
    )
}

export default CourseForm