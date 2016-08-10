import React, {PropTypes} from 'react'
import styleIgnored from './style'
const propTypes = {
    project: PropTypes.shape({name:PropTypes.string.isRequired}).isRequired
}
const TaskPanelHeader = ({project}) => (
    <div className='task-panel-header'>
        <h2>{project.name}</h2>
    </div>
    
)

TaskPanelHeader.propTypes = propTypes

export default TaskPanelHeader