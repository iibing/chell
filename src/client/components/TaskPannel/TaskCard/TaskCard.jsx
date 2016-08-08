import React, {PropTypes} from 'react'
import {Card} from 'antd'

const propTypes = {
    task: PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, summary: PropTypes.string.isRequired}).isRequired
}

const TaskCard = ({task}) => (
    <Card title={task.title} className='task-card'>
        <p>{task.summary}</p>
    </Card>
)

TaskCard.propTypes = propTypes

export default TaskCard
