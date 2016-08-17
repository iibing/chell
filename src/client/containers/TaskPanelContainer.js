import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {fetchTasks, initTaskForm, saveTask} from '../actions'
import TaskPanel from '../components/TaskPanel'


const mapStateTopProps = (state) => {
    return {tasks: state.tasks, taskForm: state.taskForm}
}

const mapDistpatchTopProps = (dispatch) => {
    return {
        fetchTasks: (taskName) => dispatch(fetchTasks(taskName)),
        initTaskForm: (taskForm) => dispatch(initTaskForm(taskForm)),
        saveTask: (task) => dispatch(saveTask(task)),
        resetTaskForm: ()=> dispatch(reset('task'))
    }
}

const TaskPanelContainer = connect(mapStateTopProps, mapDistpatchTopProps)(TaskPanel)
export default TaskPanelContainer
