import React, {PropTypes} from 'react'
import classNames from 'classnames'
import TaskLaneHeader from '../TaskLaneHeader'
import TaskCard from '../TaskCard'
import styleIgnored from './style'


const propTypes = {
    tasks: PropTypes.array,
    laneName: PropTypes.string.isRequired
}
class TaskLane extends React.Component{
    constructor(props) {
        super(props)
        this.state = {isDragOver: false}
        this.dragOver = this.dragOver.bind(this)
        this.dragEnd = this.dragEnd.bind(this)
    }
    
    dragOver(e) {
        e.preventDefault()
        this.setState({isDragOver:true})
    }
    dragEnd(e) {
        e.preventDefault()
        this.setState({isDragOver:false})
    }
    dragEnter() {
        
    }
    
    render() {
        const tasks = this.props.tasks
        const laneClassName = classNames(['layout-lane',{'layout-lane-drag-over':this.state.isDragOver}])
        return (
            <section className={laneClassName} onDragOver={this.dragOver} onDragEnter={this.dragEnter} onDragEnd={this.dragEnd}>
                <TaskLaneHeader laneName={this.props.laneName} taskNumber={tasks?tasks.length:0}/>
                {tasks? tasks.map(task => <TaskCard key={task.id} task={task}/>):''}
            </section>
        )
    }
} 

TaskLane.propTypes = propTypes
export default TaskLane