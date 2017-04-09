import React from 'react'
import { Link } from 'react-router'

export default function AllStudent(props) {
  const allCampus = props.allCampus
  const allStudent = props.allStudent
  const changeHandler = event => props.changeHandler(event)
  const submitHandler = () => props.submitHandler()

  return (
    <div>
      <div className='new-student'>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>Student Name</label>
            <input
              name='name'
              type='name'
              className='form-control'
              onChange={changeHandler}
              required
            />
          </div>
          <div className='form-group'>
            <label>Student Email</label>
            <input
              name='email'
              type='email'
              className='form-control'
              onChange={changeHandler}
              required
            />
          </div>
          {allCampus && <div className='form-group'>
            <label>Student Campus</label>
            <select
              name='campusId'
              className='form-control'
              onChange={changeHandler}
            >
              <option />
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
