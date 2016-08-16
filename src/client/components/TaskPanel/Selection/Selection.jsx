import React, {PropTypes} from 'react'
import {Select} from 'antd'

const Option = Select.Option

const propTypes = {
    selections: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired
}
const Selection = (props) => (
    <Select id="projectSelect" size="large" {...props}>
        {props.selections.map(selection => (
            <Option key={selection.value} value={selection.value}>{selection.text || selection.value}</Option>
        ))}
    </Select>
)

Selection.propTypes = propTypes

export default Selection
