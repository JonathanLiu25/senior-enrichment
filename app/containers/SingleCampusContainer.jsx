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

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer
