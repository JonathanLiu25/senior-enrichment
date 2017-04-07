import {
  RECEIVE_ALL_CAMPUS,
  RECEIVE_SELECTED_CAMPUS,
  CREATE_CAMPUS,
  UPDATE_CAMPUS,
  DELETE_CAMPUS
} from '../constants'

const initialState = {
  allCampus: [],
  selectedCampus: {}
}

const campusReducer = function (state = initialState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case RECEIVE_ALL_CAMPUS:
      newState.allCampus = action.allCampus
      break

    case RECEIVE_SELECTED_CAMPUS:
      newState.selectedCampus = action.campus
      break

    case CREATE_CAMPUS:
      newState.allCampus = [...newState.allCampus, action.campus]
      break

    case UPDATE_CAMPUS:
      newState.allCampus = newState.allCampus.map(campus => {
        return campus.id === action.campus.id ? action.campus : campus
      })
      break

    case DELETE_CAMPUS:
      newState.allCampus = newState.allCampus.filter(campus => campus.id !== action.campusId)
      break

    default:
      return state
  }

  return newState
}

export default campusReducer
