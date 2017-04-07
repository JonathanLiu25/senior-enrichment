import React from 'react'
import { Link } from 'react-router'

export default class AllStudent extends React.Component {
  render() {
    const allCampus = this.props.allCampus
    const allStudent = this.props.allStudent
    const addStudent = event => {
      return this.props.addStudent({
        name: event.target.name.value,
        email: event.target.email.value,
        campusId: event.target.campus.value
      })
    }

    return (
      <div>
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
            {allCampus && <div className='form-group'>
              <label>Student Campus</label>
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
            <button type='submit' className='btn'>Add new student</button>
          </form>
        </div>
        <div className='all-student'>
          These are all the students:
          <ul>
            {allStudent.map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    Name: {student.name} Email: {student.email} {student.campus && <p>Campus: {student.campus.name}</p>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}