import React ,{ Component, Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'


class CourseList extends Component{

	state = {
		isEdit : false
	}

	// render course item
	renderCourse = () => {
		return (
            <li>
				<span>{this.props.dataCourse.name}</span>
				<div>
					<button onClick={() => {this.toggleState()}}>
						<FontAwesomeIcon icon={faEdit} />
						Edit
					</button>
					<button onClick={() => {this.props.delete(this.props.i)}}>
						<FontAwesomeIcon icon={faTrash} />
						Delete
					</button>
				</div>
            </li>
		)
	}

	// toggle state
	toggleState = () => {
		let {isEdit} = this.state
		this.setState({
			isEdit: !isEdit
		})
	}

	updateItem = e => {
		e.preventDefault()
		this.props.edit(this.props.i, this.input.value)
		this.toggleState()
	}

	// render update form
	renderUpdateForm = () => (
		<form onSubmit={this.updateItem}>
			<input type="text" ref={v => {this.input = v}} defaultValue={this.props.dataCourse.name} autoFocus/>
			<button>
				<FontAwesomeIcon icon={faSave} />
				Save
			</button>
		</form>
	)

	render(){
		let {isEdit} = this.state
		return (
		<Fragment>
			{ isEdit? this.renderUpdateForm() : this.renderCourse()}
		</Fragment>
		)
	}
}

export default CourseList;
