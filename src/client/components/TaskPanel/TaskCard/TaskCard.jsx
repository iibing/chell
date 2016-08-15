import React, {PropTypes} from 'react'
import {Card, Button, Tag} from 'antd'
import classNames from 'classnames'
import styleIgnored from './style'

const propTypes = {
    task: PropTypes.shape({key: PropTypes.string.isRequired, project: PropTypes.string.isRequired, summary: PropTypes.string.isRequired, priority: PropTypes.number.isRequired, score: PropTypes.number.isRequired}).isRequired
}

const priorityColors = ['red', 'yellow', 'green']

const totalMillisecondsPerDay = 24 * 60 * 60 * 1000

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
        e.dataTransfer.setData('text/plain', this.props.task.key)
        this.setState({isDragging: true})
    }
    dragEnd() {
        this.setState({isDragging: false})
    }

    calculateTaskAgeText(taskAge) {
        let taskAgeText = ''
        if (taskAge < 1) {
            let taskAgeByHour = taskAge * 24
            if (taskAgeByHour < 1) {
                let taskAgeByMinute = taskAgeByHour * 60
                if (taskAgeByMinute < 1) {
                    taskAgeText = 'A few moment'
                } else {
                    taskAgeText = `${Math.floor(taskAgeByMinute)} m`
                }
            } else {
                taskAgeText = `${Math.floor(taskAgeByHour)} h`
            }
        } else {
            taskAgeText = `${Math.floor(taskAge)} d`
        }
        return taskAgeText
    }

    render() {
        const task = this.props.task
        const cardClassName = classNames('task-card', {
            'task-card-dragging': this.state.isDragging
        }, `task-${priorityColors[task.priority - 1]}-left-boarder`)

        const assigneeAvator = <div><img src="http://www.material-ui.com/images/ok-128.jpg" className='asignee-avator'/></div>

        const taskAge = (new Date() - new Date(task.createdDate)) / totalMillisecondsPerDay
        const taskAgeText = this.calculateTaskAgeText(taskAge)
        const tagAgeClassName = classNames('task-age-tag', {
            'yound-age': taskAge < 3,
            'old-age': taskAge >= 3 & taskAge < 6,
            'perm-age': taskAge >= 6
        })
        const cardContent = (
            <div className='task-card-content'>
                <div className='task-more-action' draggable={false}>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="user"/>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="edit"/>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="eye"/>
                </div>
                <div className='task-card-summary'>{task.summary}</div>
                <div className={tagAgeClassName}>
                    <Tag >{taskAgeText}</Tag>
                </div>
            </div>
        )

        return (
            <div className='task-card-container'>
                <Card title={task.key} className={cardClassName} extra={assigneeAvator} draggable={true} onDragStart={this.dragStart} onDragEnd={this.dragEnd}>
                    {this.state.isDragging
                        ? <div>{task.summary}</div>
                        : cardContent}
                    <Tag className='task-type-tag'>{task.type}</Tag>
                </Card>
            </div>
        )
    }
}

TaskCard.propTypes = propTypes
export default TaskCard