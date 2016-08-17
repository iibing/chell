import {RECEIVED_TASKS, TASK_SAVED} from '../constants/ActionTypes'

/*
const initialState = {
    tasks: []
}

*/

const tasks = (state = [], action) => {
    switch (action.type) {
        case RECEIVED_TASKS:
            return action.tasks
        case TASK_SAVED:
            return [action.task,...state]
        default:
            return state
    }
}

export default tasks