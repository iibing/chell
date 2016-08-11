import React from 'react'
import {Slider} from 'antd'

const prioritySlider = {
    0: {
        style: {
            color: 'green'
        },
        label: 'Low'
    },
    1: {
        style: {
            color: '#fa0'
        },
        label: 'Medium'
    },
    2: {
        style: {
            color: 'red'
        },
        label: <strong>High</strong>
    }
}

const priorities = ['Low', 'Medium', 'High']
const priorityTipformatter = (value) => priorities[value]

const PrioritySlider = () => (<Slider marks={prioritySlider} dots={true} included={false} defaultValue={1} max={2} tipFormatter={priorityTipformatter}/>)

export default PrioritySlider