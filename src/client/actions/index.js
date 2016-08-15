import * as types from '../constants/ActionTypes'

export const receivedTasks = tasks => {
    return {type: types.RECEIVED_TASKS, tasks: tasks}
}

// See this how to use fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const fetchTasks = (projectName) => {
    return dispatch => fetch(`/api/tasks/${projectName}`, {credentials: 'include'}).then(response => response.json()).then(tasks => dispatch(receivedTasks(tasks))).catch(e => console.error(e.toString()))
}