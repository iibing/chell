import React, {PropTypes} from 'react'
import {Select} from 'antd'

const Option = Select.Option

const propTypes = {
    projects: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired
}
const ProjectSelect = ({projects, defaultValue}) => (
    <Select id="projectSelect" size="large" defaultValue={defaultValue}>
        {projects.map(project => (
            <Option value={project.value}>{project.name}</Option>
        ))}
    </Select>
)

ProjectSelect.propTypes = propTypes

export default ProjectSelect