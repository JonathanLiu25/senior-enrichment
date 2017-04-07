'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './store'
import Root from './components/Root'

import AllCampusContainer from './containers/AllCampusContainer'
import AllStudentContainer from './containers/AllStudentContainer'
import SingleCampusContainer from './containers/SingleCampusContainer'
import SingleStudentContainer from './containers/SingleStudentContainer'

import { getAllCampus, selectCampus } from './action-creators/campus'
import { getAllStudent, selectStudent } from './action-creators/student'

const loadAll = () => {
  store.dispatch(getAllCampus())
  store.dispatch(getAllStudent())
}
const loadSelectedCampus = selectedCampus => store.dispatch(selectCampus(selectedCampus.params.campusId))
const loadSelectedStudent = selectedStudent => store.dispatch(selectStudent(selectedStudent.params.studentId))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Root} onEnter={loadAll}>
        <IndexRoute component={AllCampusContainer} />
        <Route path='/campus' component={AllCampusContainer} />
        <Route path='/campus/:campusId' component={SingleCampusContainer} onEnter={loadSelectedCampus} />
        <Route path='/student' component={AllStudentContainer} />
        <Route path='/student/:studentId' component={SingleStudentContainer} onEnter={loadSelectedStudent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
