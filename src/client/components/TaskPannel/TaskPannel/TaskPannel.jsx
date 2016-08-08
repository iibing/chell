import React from 'react'
import TaskLane from '../TaskLane'
import {Row, Col} from 'antd'

class TaskPannel extends React.Component {
    constructor(props) {
        super(props)
        this.newTasks = [
            {
                id: 1,
                title: 'CHELL-1',
                summary: 'Add TaskPannel'
            }, {
                id: 2,
                title: 'CHELL-2',
                summary: 'Add Chat Pannel'
            }
        ]
        this.wipTasks = [
            {
                id: 3,
                title: 'CHELL-1',
                summary: 'Add TaskPannel'
            }
        ]
    }
    render() {
        return (
            <Row gutter={16}>
                <Col span={8}><TaskLane tasks={this.newTasks}/></Col>
                <Col span={8}><TaskLane tasks={this.wipTasks}/></Col>
                <Col span={8}><TaskLane/></Col>
            </Row>
        )
    }
}

export default TaskPannel
