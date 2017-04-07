import React from 'react'
import { Link } from 'react-router'

export default class SingleStudent extends React.Component {
  render() {
    const allCampus = this.props.allCampus
    const selectedStudent = this.props.selectedStudent
    const changeStudent = event => {
      return this.props.changeStudent({
        id: selectedStudent.id,
        name: event.target.name.value || selectedStudent.name,
        email: event.target.email.value || selectedStudent.email,
        campusId: event.target.campus.value || selectedStudent.campusId
      })
    }
    const removeStudent = () => this.props.removeStudent(selectedStudent.id)

    return (
      <div>
        <div>
          <p>You are in {selectedStudent.name}'s student page.</p>
          <p>The student's email is: {selectedStudent.email}.</p>
          {selectedStudent.campus &&
            <p>The student's campus is:&nbsp;
              <Link to={`/campus/${selectedStudent.campusId}`}>
                {selectedStudent.campus.name}.
              </Link>
            </p>
          }
        </div>
        <button className='btn' onClick={removeStudent}>Click to remove student</button>
        <div className='student-edit'>
          <form onSubmit={changeStudent}>
            <div className='form-group'>
              <label>New Student Name</label>
              <input
                name='name'
                type='name'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>New Student Email</label>
              <input
                name='email'
                type='email'
                className='form-control'
              />
            </div>
            {allCampus && <div className='form-group'>
              <label>New Student Campus</label>
              <select
                name='campus'
                className='form-control'
              >
                <option></option>
                {allCampus.map(campus => {
                  return (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  )
                })}
              </select>
            </div>}
            <button type='submit' className='btn'>Change Student Info</button>
          </form>
        </div>
      </div>
    )
  }
}
