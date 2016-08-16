import {connect} from 'react-redux'
import {fetchTasks, initTaskForm} from '../actions'
import TaskPanel from '../components/TaskPanel'

const mapStateTopProps = (state) => {
    return {tasks: state.tasks.tasks}
}

const mapDistpatchTopProps = (dispatch) => {
    return {
        fetchTasks: (taskName) => dispatch(fetchTasks(taskName)),
        initTaskForm: (taskForm) => dispatch(initTaskForm(taskForm))
    }
}

const TaskPanelContainer = connect(mapStateTopProps, mapDistpatchTopProps)(TaskPanel)
export default TaskPanelContainer
