import React from 'react'
import { Link } from 'react-router'

export default class AllCampus extends React.Component {
  render() {
    const allCampus = this.props.allCampus
    const addCampus = event => {
      event.preventDefault()
      return this.props.addCampus({ name: event.target.name.value })
    }

    return (
      <div>
        <div className='add-campus-container'>
          <form onSubmit={addCampus}>
            <div className='form-group'>
              <label>Campus Name</label>
              <input
                name='name'
                type='name'
                className='form-control'
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
}