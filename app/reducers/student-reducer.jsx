import {
  RECEIVE_ALL_STUDENT,
  RECEIVE_SELECTED_STUDENT,
  CREATE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT
} from '../constants'

const initialState = {
  allStudent: [],
  selectedStudent: {}
}

const studentReducer = function (state = initialState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case RECEIVE_ALL_STUDENT:
      newState.allStudent = action.allStudent
      break

    case RECEIVE_SELECTED_STUDENT:
      newState.selectedStudent = action.student
      break

    case CREATE_STUDENT:
      newState.allStudent = [...newState.allStudent, action.student]
      break

    case UPDATE_STUDENT:
      newState.allStudent = newState.allStudent.map(student => {
        return student.id === action.student.id ? action.student : student
      })
      break

    case DELETE_STUDENT:
      newState.allStudent = newState.allStudent.filter(student => student.id !== action.studentId)
      break

    default:
      return state
  }

  return newState
}

export default studentReducer
