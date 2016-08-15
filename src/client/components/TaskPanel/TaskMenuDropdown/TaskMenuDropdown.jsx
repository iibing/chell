import React, {PropTypes} from 'react'

import {Menu} from 'antd'

const propTypes = {
    projects: PropTypes.array.isRequired,
    switchProject: PropTypes.func.isRequired
}

const TaskMenuDropdown = ({projects, switchProject}) => (
    <Menu>
        {projects.map(project => <Menu.Item key={project.name}>
            <a target="_blank" onClick={() => switchProject(project)}>{project.name}</a>
        </Menu.Item>)}
    </Menu>
)

TaskMenuDropdown.propTypes = propTypes

export default TaskMenuDropdown