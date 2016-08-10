import React, {PropTypes} from 'react'
import {Card, Button, Tag, Badge} from 'antd'
import classNames from 'classnames'
import styleIgnored from './style'

const propTypes = {
    task: PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, summary: PropTypes.string.isRequired, priority: PropTypes.number.isRequired, score: PropTypes.number.isRequired}).isRequired
}

const priorityColors = ['red', 'yellow', 'green']
const taskPriorities = ['H', 'M', 'L']

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
        const cardClassName = classNames('task-card', {
            'task-card-dragging': this.state.isDragging
        }, `task-${priorityColors[task.priority]}-left-boarder`)
        //const priorityColor = priorityColors[task.priority]
        //const taskPriority = taskPriorities[task.priority]

        //const priorityTag = <Tag color={priorityColor}>{taskPriority}</Tag>
        /*
        const scoreBadge = <Badge count={task.score} style={{
            backgroundColor: '#57c5f7',
            color: '#fff'
        }}/>
        */
        const assigneeAvator = <div><img src="http://www.material-ui.com/images/ok-128.jpg" className='asignee-avator'/></div>

        const cardContent = (
            <div className='task-card-content'>
                <div className='task-more-action' draggable={false}>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="user"/>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="edit"/>
                    <Button className='task-more-action-btn' size='large' type="primary" shape="circle" icon="eye"/>
                </div>
                <div>{task.summary}</div>
            </div>
        )

        return (
            <Card title={task.title} className={cardClassName} draggable={true} onDragStart={this.dragStart} onDragEnd={this.dragEnd} extra={assigneeAvator}>

                {this.state.isDragging
                    ? 
                    <div>{task.summary}</div>
                    :cardContent}

            </Card>

        )
    }
}

TaskCard.propTypes = propTypes
export default TaskCard