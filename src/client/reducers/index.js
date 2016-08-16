import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from  'redux-form'
import tasks from './tasks'
import taskForm from './taskForm'

const rootReducer = combineReducers({routing: routerReducer,tasks:tasks, form:formReducer, taskForm: taskForm})

export default rootReducer