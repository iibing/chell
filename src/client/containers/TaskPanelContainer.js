import {connect} from 'react-redux'
import {fetchTasks} from '../actions'
import TaskPanel from '../components/TaskPanel'

const mapStateTopProps = (state) => {
    return {tasks: state.tasks.tasks}
}

const mapDistpatchTopProps = (dispatch) => {
    return {
        fetchTasks: (taskName) => dispatch(fetchTasks(taskName))
    }
}

const TaskPanelContainer = connect(mapStateTopProps, mapDistpatchTopProps)(TaskPanel)
export default TaskPanelContainer
