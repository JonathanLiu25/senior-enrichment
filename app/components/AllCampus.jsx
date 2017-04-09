import React from 'react'
import { Link } from 'react-router'


export default function AllCampus(props) {
  const allCampus = props.allCampus
  const changeHandler = event => props.changeHandler(event)
  const submitHandler = event => props.submitHandler(event)

  return (
    <div>
      <div className='add-campus-container'>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label>Campus Name</label>
            <input
              name='name'
              type='name'
              className='form-control'
              onChange={changeHandler}
              required
            />
          </div>
          <button type='submit' className='btn'>Add Campus</button>
        </form>
      </div>
      <div className='all-campus'>
        These are all the campuses:
          <ul>
          {allCampus.map(campus => {
            return (
              <li key={campus.id}>
                <Link to={`/campus/${campus.id}`}>
                  {campus.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}