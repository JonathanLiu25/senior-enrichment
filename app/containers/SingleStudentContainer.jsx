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

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer
