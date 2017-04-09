import React from 'react'
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

class AllCampusContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campusName: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler(event) {
    this.setState({ campusName: event.target.value })
  }

  submitHandler(event) {
    event.preventDefault()
    return this.props.addCampus({ name: this.state.campusName })
  }

  render() {
    return (
      <AllCampus
        {...this.props}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    )
  }
}

const AllCampusConnector = connect(mapStateToProps, mapDispatchToProps)(AllCampusContainer)

export default AllCampusConnector
