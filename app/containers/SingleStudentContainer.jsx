import React from 'react'
import { connect } from 'react-redux'
import SingleStudent from '../components/SingleStudent'
import { changeStudent, removeStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    allCampus: state.campus.allCampus,
    selectedStudent: state.student.selectedStudent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStudent: student => dispatch(changeStudent(student)),
    removeStudent: studentId => dispatch(removeStudent(studentId))
  }
}

class SingleStudentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.selectedStudent)
  }

  changeHandler(event) {
    const key = event.target.name
    const value = event.target.value
    this.setState({ [key]: value })
  }

  submitHandler() {
    this.props.changeStudent(this.state)
  }

  render() {
    return (
      <SingleStudent
        {...this.state}
        {...this.props}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    )
  }
}

const SingleStudentConnector = connect(mapStateToProps, mapDispatchToProps)(SingleStudentContainer)

export default SingleStudentConnector
