import {INIT_TASK_FORM} from '../constants/ActionTypes'

const taskForm = (state = {}, action) => {
    switch (action.type) {
        case INIT_TASK_FORM:
            return action.formData
        default:
            return state
    }
}

export default taskForm
