import React from 'react'
import {Form, Input} from 'antd'

import PrioritySlider from '../PrioritySlider'
import TaskAttachment from '../TaskAttachment'
import ProjectSelect from '../ProjectSelect'
import TaskDatePicker from '../TaskDatePicker'

const FormItem = Form.Item

import styleIgnored from './style'

const labelCol = {
    span: 5
}
const largeFormItemLayout = {
    labelCol: labelCol,
    wrapperCol: {
        span: 18
    }
}
const smallFormWrapperCol = {
    span: 10
}

const projects = [
    {
        value: 'CHELL',
        name: 'CHELL'
    }, {
        value: 'PHOENIX',
        name: 'PHOENIX'
    }, {
        value: 'PRDM',
        name: 'PRDM'
    }
]
class TaskModalForm extends React.Component {
    render() {
        return (
            <Form horizontal>
                <FormItem label='Project' labelCol={labelCol} wrapperCol={smallFormWrapperCol}>
                    <ProjectSelect projects={projects} defaultValue='CHELL'/>
                </FormItem>
                <FormItem label='Summary' {...largeFormItemLayout}>
                    <Input ref='taskSummaryInput' id="taskSummaryInput" placeholder=""/>
                </FormItem>
                <FormItem label='Description' {...largeFormItemLayout}>
                    <Input type="textarea" id="taskDescriptionTextarea" rows="3"/>
                </FormItem>
                <FormItem label='Priority' labelCol={labelCol} wrapperCol={smallFormWrapperCol}>
                    <PrioritySlider/>
                </FormItem>
                <FormItem label='Attachement' labelCol={labelCol} wrapperCol={smallFormWrapperCol}>
                    <TaskAttachment/>
                </FormItem>
                <FormItem label='Due Date' labelCol={labelCol} wrapperCol={smallFormWrapperCol}>
                    <TaskDatePicker />
                </FormItem>
            </Form>
        )
    }
}

export default TaskModalForm