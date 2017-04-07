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

const AllStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudent)

export default AllStudentContainer
