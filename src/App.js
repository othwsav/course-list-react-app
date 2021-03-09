import React ,{ Component } from "react"
import CourseForm from './compnents/CourseForm'
import CourseList from './compnents/CourseList'
import './css/style.css'


class App extends Component{
	state = {
		courses : [
			{name: "Html5"},
			{name: "CSS3"},
			{name: "JavaScript"},
			{name: "JQuery"},
			{name: "Bootstrap"},
			{name: "Sass"},
			{name: "Git"},
			{name: "Github"},
			{name: "React"},
		],
		current : ''
	}

	// UpdateCourse
	updateCourse = e => {
		this.setState({
			current: e.target.value
		})
	}


	// Add Course

	addCourse = e => {
		e.preventDefault()
		let {courses, current} =  this.state;
		courses.push({name: current})
		this.setState({
			courses,
			current: ''
		})

	}

	// delete Course
	deleteCourse = (index) => {
		let {courses} = this.state
		courses.splice(index, 1)
		this.setState({
			courses
		})
	}

	// edit course
	editCourse = (index, value) => {
		let {courses} = this.state,
		course = courses[index]
		course['name'] = value
		this.setState({
			courses
		})
	}

	render(){

		const {courses} = this.state,
			courseList = courses.map((course, index) => {
				return <CourseList edit={this.editCourse} i={index} delete={this.deleteCourse} dataCourse={course} key={index}/>
			})
		return (
		<div className="App">
			<h1>Course List</h1>
			<CourseForm crVal={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
			<ul>
				{courseList}
			</ul>
		</div>
		)
	}
}

export default App;
