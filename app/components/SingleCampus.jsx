import React from 'react'
import { Link } from 'react-router'

export default function SingleCampus(props) {
  const selectedCampus = props.selectedCampus
  const students = selectedCampus.students
  const removeCampus = () => props.removeCampus(selectedCampus.id)
  const studentNameChangeHandler = event => props.studentNameChangeHandler(event)
  const studentEmailChangeHandler = event => props.studentEmailChangeHandler(event)
  const campusNameChangeHandler = event => props.campusNameChangeHandler(event)
  const campusSubmitHandler = () => props.campusSubmitHandler()
  const newStudentSubmitHandler = () => props.newStudentSubmitHandler()
  const removeStudentFromCampus = student => props.removeStudentFromCampus(student)

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
                <button className='btn' onClick={removeStudentFromCampus(student)}>Remove Student from campus</button>
              </li>
            )
          })}
        </ul>
      </div>}
      <button className='btn' onClick={removeCampus}>Click to remove campus</button>
      <div>
        <div className='campus-edit'>
          <form onSubmit={campusSubmitHandler}>
            <div className='form-group'>
              <label>New Campus Name</label>
              <input
                name='name'
                type='name'
                className='form-control'
                onChange={campusNameChangeHandler}
                required
              />
            </div>
            <button type='submit' className='btn'>Change Campus Name</button>
          </form>
        </div>
        <div className='new-student'>
          <form onSubmit={newStudentSubmitHandler}>
            <div className='form-group'>
              <label>Student Name</label>
              <input
                name='name'
                type='name'
                className='form-control'
                onChange={studentNameChangeHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label>Student Email</label>
              <input
                name='email'
                type='email'
                className='form-control'
                onChange={studentEmailChangeHandler}
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
