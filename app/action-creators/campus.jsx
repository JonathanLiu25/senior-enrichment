import axios from 'axios'
import { browserHistory } from 'react-router'

import {
  RECEIVE_ALL_CAMPUS,
  RECEIVE_SELECTED_CAMPUS,
  CREATE_CAMPUS,
  UPDATE_CAMPUS,
  DELETE_CAMPUS
} from '../constants'

/* ACTION-CREATOR */
const receiveAllCampus = allCampus => {
  return {
    type: RECEIVE_ALL_CAMPUS,
    allCampus
  }
}

const receiveSelectedCampus = campus => {
  return {
    type: RECEIVE_SELECTED_CAMPUS,
    campus
  }
}

const createCampus = campus => {
  return {
    type: CREATE_CAMPUS,
    campus
  }
}

const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}

const deleteCampus = campusId => {
  return {
    type: DELETE_CAMPUS,
    campusId
  }
}

/* DISPATCHERS */
export const getAllCampus = () => dispatch => {
  axios.get('/api/campus')
    .then(allCampus => dispatch(receiveAllCampus(allCampus.data)))
    .catch(err => console.log('Cannot load all campuses', err))
}

export const selectCampus = campusId => dispatch => {
  axios.get(`/api/campus/${campusId}`)
    .then(campus => dispatch(receiveSelectedCampus(campus.data)))
    .catch(err => console.log('Cannot load campus', err))
}

export const addCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
    .then(newCampus => {
      dispatch(createCampus(newCampus.data))
      browserHistory.push(`/campus/${newCampus.data.id}`)
    })
    .catch(err => console.log('Cannot create campus', err))
}

export const changeCampus = campus => dispatch => {
  axios.put(`/api/campus/${campus.id}`, campus)
    .then(changedCampus => dispatch(updateCampus(changedCampus.data)))
    .catch(err => console.log('Cannot update campus', err))
}

export const removeCampus = campusId => dispatch => {
  axios.delete(`/api/campus/${campusId}`)
    .then(() => {
      dispatch(deleteCampus(campusId))
      browserHistory.push('/campus')
    })
    .catch(err => console.log('Cannot delete campus', err))
}
