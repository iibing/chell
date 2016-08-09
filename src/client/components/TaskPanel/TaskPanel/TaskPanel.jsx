import React from 'react'
import TaskLane from '../TaskLane'
import {Row, Col} from 'antd'
import styleIgnored from './style'

class TaskPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTasks: [
                {
                    id: 1,
                    title: 'CHELL-1',
                    summary: 'Add TaskPannel'
                }, {
                    id: 2,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }, {
                    id: 3,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }, {
                    id: 4,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }, {
                    id: 5,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }, {
                    id: 6,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }, {
                    id: 7,
                    title: 'CHELL-2',
                    summary: 'Add Chat Pannel'
                }
            ],
            wipTasks: [
                {
                    id: 3,
                    title: 'CHELL-1',
                    summary: 'Add TaskPannel'
                }
            ]
        }
    }
    render() {
        return (
            <div className='task-pannel'>
                <Row gutter={16}>
                    <Col span={6}><TaskLane tasks={this.state.newTasks}/></Col>
                    <Col span={6}><TaskLane tasks={this.state.wipTasks}/></Col>
                    <Col span={6}><TaskLane/></Col>
                    <Col span={6}><TaskLane/></Col>
                </Row>
            </div>
        )
    }
}

export default TaskPanel