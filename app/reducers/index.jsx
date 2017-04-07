import { combineReducers } from 'redux'

import campusReducer from './campus-reducer'
import studentReducer from './student-reducer'

const initialState = {}

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

export default combineReducers({
  root: rootReducer,
  campus: campusReducer,
  student: studentReducer
})
