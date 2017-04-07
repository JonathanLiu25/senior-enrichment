import axios from 'axios'
import { browserHistory } from 'react-router'

import {
  RECEIVE_ALL_STUDENT,
  RECEIVE_SELECTED_STUDENT,
  CREATE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT
} from '../constants'

/* ACTION-CREATOR */
const receiveAllStudent = allStudent => {
  return {
    type: RECEIVE_ALL_STUDENT,
    allStudent
  }
}

const receiveSelectedStudent = student => {
  return {
    type: RECEIVE_SELECTED_STUDENT,
    student
  }
}

const createStudent = student => {
  return {
    type: CREATE_STUDENT,
    student
  }
}

const updateStudent = student => {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

const deleteStudent = studentId => {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}

/* DISPATCHERS */
export const getAllStudent = () => dispatch => {
  axios.get('/api/student')
    .then(allStudent => dispatch(receiveAllStudent(allStudent.data)))
    .catch(err => console.log('Cannot load all students', err))
}

export const selectStudent = studentId => dispatch => {
  axios.get(`/api/student/${studentId}`)
    .then(student => dispatch(receiveSelectedStudent(student.data)))
    .catch(err => console.log('Cannot load student', err))
}

export const addStudent = student => dispatch => {
  axios.post('/api/student', student)
    .then(newStudent => {
      dispatch(createStudent(newStudent.data))
      browserHistory.push(`/student/${newStudent.data.id}`)
    })
    .catch(err => console.log('Cannot create student', err))
}

export const changeStudent = student => dispatch => {
  axios.put(`/api/student/${student.id}`, student)
    .then(changedStudent => dispatch(updateStudent(changedStudent.data)))
    .catch(err => console.log('Cannot update student', err))
}

export const removeStudent = studentId => dispatch => {
  axios.delete(`/api/student/${studentId}`)
    .then(() => {
      dispatch(deleteStudent(studentId))
      browserHistory.push('/student')
    })
    .catch(err => console.log('Cannot delete student', err))
}
