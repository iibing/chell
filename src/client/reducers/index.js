import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import tasks from './tasks'

const rootReducer = combineReducers({routing: routerReducer,tasks:tasks})

export default rootReducer