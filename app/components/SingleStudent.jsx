import React from 'react'
import { Link } from 'react-router'

export default function SingleStudent(props) {
  const allCampus = props.allCampus
  const selectedStudent = props.selectedStudent
  const changeHandler = event => props.changeHandler(event)
  const submitHandler = () => props.submitHandler()
  const removeStudent = () => props.removeStudent(selectedStudent.id)

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
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>New Student Name</label>
            <input
              name='name'
              type='name'
              className='form-control'
              onChange={changeHandler}
            />
          </div>
          <div className='form-group'>
            <label>New Student Email</label>
            <input
              name='email'
              type='email'
              className='form-control'
              onChange={changeHandler}
            />
          </div>
          {allCampus && <div className='form-group'>
            <label>New Student Campus</label>
            <select
              name='campusId'
              className='form-control'
              onChange={changeHandler}
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
