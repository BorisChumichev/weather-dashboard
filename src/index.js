import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import reducer from './reducers/dashboard'
import Dashboard from './containers/dashboard'
import './index.css';

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, createLogger())
)

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
)
