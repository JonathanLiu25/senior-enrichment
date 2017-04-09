import React from 'react'
import { connect } from 'react-redux'
import SingleCampus from '../components/SingleCampus'
import { removeCampus, changeCampus } from '../action-creators/campus'
import { addStudent, changeStudent } from '../action-creators/student'

const mapStateToProps = state => {
  return {
    selectedCampus: state.campus.selectedCampus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCampus: campus => dispatch(changeCampus(campus)),
    removeCampus: campusId => dispatch(removeCampus(campusId)),
    addStudent: student => dispatch(addStudent(student)),
    changeStudent: student => dispatch(changeStudent(student))
  }
}

class SingleCampusContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentName: '',
      studentEmail: '',
      updatedCampusName: ''
    }
    this.studentNameChangeHandler = this.studentNameChangeHandler.bind(this)
    this.studentEmailChangeHandler = this.studentEmailChangeHandler.bind(this)
    this.campusNameChangeHandler = this.campusNameChangeHandler.bind(this)
    this.campusSubmitHandler = this.campusSubmitHandler.bind(this)
    this.newStudentSubmitHandler = this.newStudentSubmitHandler.bind(this)
    this.removeStudentFromCampus = this.removeStudentFromCampus.bind(this)
  }

  studentNameChangeHandler(event) {
    this.setState({ studentName: event.target.value })
  }

  studentEmailChangeHandler(event) {
    this.setState({ studentEmail: event.target.value })
  }

  campusNameChangeHandler(event) {
    this.setState({ updatedCampusName: event.target.value })
  }

  campusSubmitHandler() {
    this.props.changeCampus({
      id: this.props.selectedCampus.id,
      name: this.state.updatedCampusName
    })
  }

  newStudentSubmitHandler() {
    this.props.addStudent({
      name: this.state.studentName,
      email: this.state.studentEmail,
      campusId: this.props.selectedCampus.id
    })
  }

  removeStudentFromCampus(student) {
    return () => this.props.changeStudent(Object.assign({}, student, { campusId: null }))
  }

  render() {
    return (
      <SingleCampus
        {...this.props}
        studentNameChangeHandler={this.studentNameChangeHandler}
        studentEmailChangeHandler={this.studentEmailChangeHandler}
        campusNameChangeHandler={this.campusNameChangeHandler}
        campusSubmitHandler={this.campusSubmitHandler}
        newStudentSubmitHandler={this.newStudentSubmitHandler}
        removeStudentFromCampus={this.removeStudentFromCampus}
      />
    )
  }
}

const SingleCampusConnector = connect(mapStateToProps, mapDispatchToProps)(SingleCampusContainer)

export default SingleCampusConnector
