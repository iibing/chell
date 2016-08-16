import {INIT_TASK_FORM} from '../constants/ActionTypes'

const taskForm = (state = {formData:{}}, action) => {
    switch (action.type) {
        case INIT_TASK_FORM:
            return {formData: action.formData}
        default:
            return state
    }
}

export default taskForm
