import React, {PropTypes} from 'react'
import TaskLane from '../TaskLane'
import {Row, Col} from 'antd'
import TaskPanelHeader from '../TaskPanelHeader'
import AddTaskButton from '../AddTaskButton'
import TaskModal from '../TaskModal'
import styleIgnored from './style'

const propTypes = {
    tasks: PropTypes.array,
    fetchTasks: PropTypes.func.isRequired
}

class TaskPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal2Visible: false,
            project: {
                name: 'CHELL'
            }
        }
        this.projects = [
            {
                name: 'CHELL'
            }, {
                name: 'PHONIEX'
            }
        ]
        
        this.showCreateTaskModal = this.showCreateTaskModal.bind(this)
        this.setModal2Visible = this.setModal2Visible.bind(this)
        this.switchProject = this.switchProject.bind(this)
    }

    componentDidMount() {
        this.props.fetchTasks(this.state.project.name)
    }
    showCreateTaskModal() {
        this.setModal2Visible(true)
    }
    setModal2Visible(visible) {
        this.setState({modal2Visible: visible})
    }

    switchProject(project) {
        project.name !== this.state.project.name && this.setState({project: project})
    }
    render() {
        console.log(this.props.tasks)
        return (
            <div className='task-pannel'>
                <TaskPanelHeader project={this.state.project} projects={this.projects} switchProject={this.switchProject}/>
                <Row gutter={5}>
                    <Col span={7}><TaskLane tasks={this.props.tasks.filter(task => task.status === 'Open')} laneName='TODO'/></Col>
                    <Col span={7}><TaskLane tasks={this.props.tasks.filter(task => task.status === 'WIP')} laneName='WIP'/></Col>
                    <Col span={7}><TaskLane tasks={this.props.tasks.filter(task => task.status === 'DONE')} laneName='DONE'/></Col>
                </Row>
                <AddTaskButton showCreateTaskModal={this.showCreateTaskModal}/>
                <TaskModal modal2Visible={this.state.modal2Visible} setModal2Visible={this.setModal2Visible}/>
            </div>
        )
    }
}
TaskPanel.propTypes = propTypes

export default TaskPanel
