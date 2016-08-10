import React, {PropTypes} from 'react'
import {Button} from 'antd'
import styleIgnored from './style'

const propTypes = {
    showCreateTaskModal: PropTypes.func.isRequired
}
class AddTaskButton extends React.Component {
    render() {
        return (
            <div className='add-task-button' >
                <Button type="primary" shape="circle" icon="plus" size="large" onClick={this.props.showCreateTaskModal}/>
            </div>
        )
    }
}
AddTaskButton.propTypes = propTypes

export default AddTaskButton