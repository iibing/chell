import React, {PropTypes} from 'react'
import {Card, Tag} from 'antd'
import classNames from 'classnames'
import styleIgnored from './style'

const propTypes = {
    task: PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, summary: PropTypes.string.isRequired}).isRequired
}

const priorityColors = ['red','yellow','green']
const taskPriorities = ['High','Medium', 'Low']

class TaskCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false
        }
        this.dragStart = this.dragStart.bind(this)
        this.dragEnd = this.dragEnd.bind(this)

    }
    dragStart(e) {
        this.dragged = e.currentTarget
        e.dataTransfer.effectAllowed = 'move'
        //e.dataTransfer.setData('text/html', e.currentTarget)
        e.dataTransfer.setData('text/plain', this.props.task.id)
        this.setState({isDragging: true})
    }
    dragEnd() {
        this.setState({isDragging: false})
    }

    render() {
        const task = this.props.task
        const cardClassName = classNames('task-card', {'task-card-dragging': this.state.isDragging})
        const priorityColor = priorityColors[task.priority]
        const taskPriority = taskPriorities[task.priority]
        return (
            <Card title={task.title} className={cardClassName} draggable={true} onDragStart={this.dragStart} onDragEnd={this.dragEnd} extra={<Tag color={priorityColor}>{taskPriority}</Tag>}>
                <p>{task.summary}</p>
            </Card>
        )
    }
}

TaskCard.propTypes = propTypes
export default TaskCard
