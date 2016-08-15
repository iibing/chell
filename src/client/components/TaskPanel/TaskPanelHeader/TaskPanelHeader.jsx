import React, {PropTypes} from 'react'
import {Dropdown, Icon} from 'antd'

import TaskMenuDropdown from '../TaskMenuDropdown'
import styleIgnored from './style'

const propTypes = {
    project: PropTypes.shape({name: PropTypes.string.isRequired}).isRequired,
    projects: PropTypes.array.isRequired,
    switchProject: PropTypes.func.isRequired
}
class TaskPanelHeader extends React.Component {

    constructor(props) {
        super(props)
        this.switchProject = this.switchProject.bind(this)
    }

    switchProject(project) {
        this.props.switchProject(project)
    }

    render() {
        const project = this.props.project
        const menu = <TaskMenuDropdown projects={this.props.projects} switchProject={this.switchProject}/>
            
        return (
            <div className='task-panel-header'>
                <Dropdown overlay={menu}>
                    <div>
                        <h2 className='project-header-title'>{project.name}</h2>
                        <Icon type="down"/>
                    </div>

                </Dropdown>
            </div>
        )
    }
}

TaskPanelHeader.propTypes = propTypes
export default TaskPanelHeader