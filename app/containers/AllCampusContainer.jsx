import { connect } from 'react-redux'
import AllCampus from '../components/AllCampus'
import { addCampus } from '../action-creators/campus'

const mapStateToProps = state => {
  return {
    allCampus: state.campus.allCampus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCampus: campus => dispatch(addCampus(campus))
  }
}

const AllCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampus)

export default AllCampusContainer
