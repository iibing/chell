import React, {PropTypes} from 'react'
import {Card} from 'antd'
import { DragSource } from 'react-dnd'
import styleIgnored from './style'

const propTypes = {
    task: PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, summary: PropTypes.string.isRequired}).isRequired
}

const TaskCard = ({task}) => (
    <Card title={task.title} className='task-card' draggable={true}>
        <p>{task.summary}</p>
    </Card>
)

TaskCard.propTypes = propTypes

export default TaskCard
