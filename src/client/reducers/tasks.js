import {RECEIVED_TASKS} from '../constants/ActionTypes'

const initialState = {
    tasks: []
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_TASKS:
            return Object.assign({}, state, {tasks: action.tasks})
        default:
            return state
    }
}

export default tasks