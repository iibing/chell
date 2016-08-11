import React, {PropTypes} from 'react'
import {Select} from 'antd'

const Option = Select.Option

const propTypes = {
    selections: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired
}
const Selection = ({selections, defaultValue}) => (
    <Select id="projectSelect" size="large" defaultValue={defaultValue}>
        {selections.map(selection => (
            <Option value={selection.value}>{selection.text || selection.value}</Option>
        ))}
    </Select>
)

Selection.propTypes = propTypes

export default Selection
