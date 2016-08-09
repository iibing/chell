import React, {PropTypes} from 'react'
import TaskCard from '../TaskCard'
import styleIgnored from './style'

const propTypes = {
    tasks: PropTypes.array
}
const TaskLane = ({tasks}) => (
    <section className='layout-lane'>
        {tasks? tasks.map(task => <TaskCard key={task.id} task={task}/>):''}
    </section>
)

TaskLane.propTypes = propTypes
export default TaskLane