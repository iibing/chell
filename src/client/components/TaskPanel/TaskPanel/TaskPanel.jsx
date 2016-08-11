import React from 'react'
import TaskLane from '../TaskLane'
import {Row, Col} from 'antd'
import TaskPanelHeader from '../TaskPanelHeader'
import AddTaskButton from '../AddTaskButton'
import TaskModal from '../TaskModal'
import styleIgnored from './style'

class TaskPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTasks: [
                {
                    id: 1,
                    title: 'CHELL-1',
                    summary: 'Add draggable to the task card and change the status of the tasks',
                    comment:'',
                    priority: 0,
                    score: 5,
                    type: 'feature',
                    age: {text:'1d',value: 1},
                    dueDate: '2016/08/20'
                }, {
                    id: 2,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel',
                    priority: 1,
                    score: 5,
                    type: 'bugfix',
                    age: {text:'5d',value: 5},
                }, {
                    id: 3,
                    title: 'CHELL-3',
                    summary: 'Add Chat Pannel',
                    priority: 2,
                    score: 2,
                    type: 'story',
                    age: {text:'7d',value: 7}
                    
                }, {
                    id: 4,
                    title: 'CHELL-4',
                    summary: 'Add Chat Pannel',
                    priority: 0,
                    score: 4,
                    type: 'feature',
                    age: {text:'3d',value: 3},
                }, {
                    id: 5,
                    title: 'CHELL-5',
                    summary: 'Add Chat Pannel',
                    priority: 1,
                    score: 6,
                    type: 'feature',
                    age: {text:'a few min ago',value: 0}, 
                }, {
                    id: 6,
                    title: 'CHELL-6',
                    summary: 'Add Chat Pannel',
                    priority: 2,
                    score: 3,
                    type: 'feature',
                    age: {text:'2h',value: 0.2},
                }, {
                    id: 7,
                    title: 'CHELL-7',
                    summary: 'Add Chat Pannel',
                    priority: 1,
                    score: 7,
                    type: 'bugfix',
                    age: {text:'2h',value: 0.2},
                }
            ],
            wipTasks: [
                {
                    id: 3,
                    title: 'CHELL-8',
                    summary: 'Add TaskPannel',
                    priority: 0,
                    score: 8,
                    type: 'feature',
                    age: {text:'4d',value: 4},
                }
            ],
            modal2Visible: false
        }
        
        this.project = {name:'CHELL'}
        this.showCreateTaskModal = this.showCreateTaskModal.bind(this)
        this.setModal2Visible = this.setModal2Visible.bind(this)
    }
    showCreateTaskModal() {
        console.log('click')
        this.setModal2Visible(true)
    }
    setModal2Visible(visible) {
        this.setState({modal2Visible:visible})
    }
    render() {
        return (
            <div className='task-pannel'>
                <TaskPanelHeader project = {this.project}/>
                <Row gutter={5}>
                    <Col span={7}><TaskLane tasks={this.state.newTasks} laneName='TODO'/></Col>
                    <Col span={7}><TaskLane tasks={this.state.wipTasks} laneName='WIP'/></Col>
                    <Col span={7}><TaskLane laneName='DONE'/></Col>
                </Row>
                <AddTaskButton showCreateTaskModal={this.showCreateTaskModal}/>
                <TaskModal modal2Visible={this.state.modal2Visible} setModal2Visible={this.setModal2Visible} />
            </div>
        )
    }
}

export default TaskPanel
