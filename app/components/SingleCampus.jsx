import React from 'react'
import { Link } from 'react-router'

export default class SingleCampus extends React.Component {
  render() {
    const selectedCampus = this.props.selectedCampus
    const students = selectedCampus.students
    const changeCampus = event => {
      return this.props.changeCampus({
        id: selectedCampus.id,
        name: event.target.name.value
      })
    }
    const removeCampus = () => this.props.removeCampus(selectedCampus.id)
    const addStudent = event => {
      event.preventDefault()
      return this.props.addStudent({
        name: event.target.name.value,
        email: event.target.email.value,
        campusId: selectedCampus.id
      })
    }
    const changeStudent = student => () => {
      return this.props.changeStudent(Object.assign({}, student, { campusId: null }))
    }

    return (
      <div>
        <div>
          You are in the {selectedCampus.name} page.
        </div>
        {students && <div>
          These are all of the students in the campus:
          <ul>
            {students.map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    {student.name}
                  </Link>
                  <button className='btn' onClick={changeStudent(student)}>Remove Student from campus</button>
                </li>
              )
            })}
          </ul>
        </div>}
        <button className='btn' onClick={removeCampus}>Click to remove campus</button>
        <div>
          <div className='campus-edit'>
            <form onSubmit={changeCampus}>
              <div className='form-group'>
                <label>New Campus Name</label>
                <input
                  name='name'
                  type='name'
                  className='form-control'
                  required
                />
              </div>
              <button type='submit' className='btn'>Change Campus Name</button>
            </form>
          </div>
          <div className='new-student'>
            <form onSubmit={addStudent}>
              <div className='form-group'>
                <label>Student Name</label>
                <input
                  name='name'
                  type='name'
                  className='form-control'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Student Email</label>
                <input
                  name='email'
                  type='email'
                  className='form-control'
                  required
                />
              </div>
              <button type='submit' className='btn'>Add new student</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
