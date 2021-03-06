import React, {PropTypes} from 'react'
import {Modal} from 'antd'
import TaskModalForm from '../TaskModalForm'

import styleIgnored from './style'

const propTypes = {
    saveTask: PropTypes.func.isRequired,
    setModal2Visible: PropTypes.func.isRequired,
    modal2Visible: PropTypes.bool.isRequired
}

class TaskModal extends React.Component {
    constructor(props) {
        super(props)
    }
    setModal2Visible(visible) {
        this.props.setModal2Visible(visible)
    }
    submitForm(task) {
        this.props.saveTask(task)
        this.props.setModal2Visible(false)
    }
    render() {
        return (
            <div className='task-creation-modal'>
                <Modal 
                    title="Create Task" 
                    style={{ top: 20 }}
                    closable={true} 
                    width={600} 
                    visible={this.props.modal2Visible}
                    maskClosable={false}
                    okText='Create' 
                    cancelText='Cancel' 
                    onOk={() => this.setModal2Visible(false)} 
                    onCancel={() => this.setModal2Visible(false)}>
                    <TaskModalForm onSubmit={(task) => this.submitForm(task)}/>
                </Modal>
            </div>
        )
    }
}
TaskModal.propTypes = propTypes

export default TaskModal
