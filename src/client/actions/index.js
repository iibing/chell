import * as types from '../constants/ActionTypes'
import openNotification from '../components/Notification'

export const receivedTasks = tasks => ({type: types.RECEIVED_TASKS, tasks: tasks})

// See this how to use fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const fetchTasks = (projectName) => {
    return dispatch => fetch(`/api/tasks/${projectName}`, {credentials: 'include'}).then(response => response.json()).then(tasks => dispatch(receivedTasks(tasks))).catch(e => console.error(e.toString()))
}

export const initTaskForm = formData => ({type: types.INIT_TASK_FORM,formData:formData})

export const saveTask = (task) => {
    return dispatch => fetch('/api/tasks', {method:'post',headers:{'Content-type':'application/json'},credentials: 'include', body: JSON.stringify(task)})
        .then(response => response.json())
        .then(
            task => {
                if(task.key) {
                    openNotification('success', 'Great', `${task.key} is created`)
                    dispatch(taskCreated(task))
                } else {
                    openNotification('error', 'Oops!', 'Some error happened, task is not saved')
                }
                
            }
            
        )
        .catch(() => openNotification('error', 'Oops!', 'Some error happened, task is not saved'))
}

export const taskCreated = (task) => ({type: types.TASK_SAVED, task:task})

