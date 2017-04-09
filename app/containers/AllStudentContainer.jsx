import React from 'react'
import { connect } from 'react-redux'
import AllStudent from '../components/AllStudent'
import { addStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    allCampus: state.campus.allCampus,
    allStudent: state.student.allStudent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(addStudent(student))
  }
}

class AllStudentContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      campusId: null
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler(event) {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }

  submitHandler() {
    console.log(this.state)
    return this.props.addStudent(this.state)
  }

  render() {
    return (
      <AllStudent
        {...this.props}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    )
  }
}

const AllStudentConnector = connect(mapStateToProps, mapDispatchToProps)(AllStudentContainer)

export default AllStudentConnector
