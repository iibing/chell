import React, {PropTypes} from 'react'
import styleIgnored from './style'

const propTypes = {
    laneName: PropTypes.string.isRequired,
    taskNumber: PropTypes.number.isRequired
}

const TaskLaneHeader = ({laneName, taskNumber}) => (
    <div className='lane-header'>
        <div className='lane-task-number'>{taskNumber}</div>
        <div className='lane-name'>{laneName}</div>
    </div>
)

TaskLaneHeader.propTypes = propTypes

export default TaskLaneHeader