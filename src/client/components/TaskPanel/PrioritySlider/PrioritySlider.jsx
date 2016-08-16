import React from 'react'
import {Slider} from 'antd'

const prioritySlider = {
    1: {
        style: {
            color: 'green'
        },
        label: 'Low'
    },
    2: {
        style: {
            color: '#fa0'            
        },
        label: 'Medium'
    },
    3: {
        style: {
            color: 'red',
            'font-weight': 'bold'
        },
        label: 'High'
    }
}

const priorities = ['Low', 'Medium', 'High']

const priorityTipformatter = (value) => {
    if(value > priorities.length) {
        return undefined
    } else {
        return priorities[value-1]
    }
}

const PrioritySlider = (props) => (<Slider {...props} marks={prioritySlider} dots={true} included={false} defaultValue={2} max={3} min={1} tipFormatter={priorityTipformatter}/>)

export default PrioritySlider