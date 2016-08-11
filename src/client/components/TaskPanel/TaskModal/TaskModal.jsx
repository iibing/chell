import React, {PropTypes} from 'react'
import {Modal} from 'antd'
import TaskModalForm from '../TaskModalForm'

import styleIgnored from './style'

const propTypes = {
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
                    <TaskModalForm submitForm={() => this.setModal2Visible(false)}/>
                </Modal>
            </div>
        )
    }
}
TaskModal.propTypes = propTypes

export default TaskModal
