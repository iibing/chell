import * as types from '../constants/ActionTypes'

export const receivedTasks = tasks => {
    return {type: types.RECEIVED_TASKS, tasks: tasks}
}

export const fetchTasks = () => {
    return dispatch => fetch('/api/tasks').then(response => response.json()).then(tasks => dispatch(receivedTasks(tasks))).catch(e => console.error(e.toString()))
}