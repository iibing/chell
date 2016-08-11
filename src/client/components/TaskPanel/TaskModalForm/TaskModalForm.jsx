import React from 'react'
import {Form, Input, Button} from 'antd'

import PrioritySlider from '../PrioritySlider'
import TaskAttachment from '../TaskAttachment'
import Selection from '../Selection'
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

const tinyFormWrapperCol = {
    span: 6
}


const projects = [
    {
        value: 'CHELL'
    }, {
        value: 'PHOENIX'
    }, {
        value: 'PRDM'
    }
]

const taskTypes = [
    {
        value: 'feature'
    },
    {
        value: 'bugfix'
    },
    {
        value: 'story'
    }
    
]
class TaskModalForm extends React.Component {
    render() {
        return (
            <Form horizontal>
                <FormItem label='Project' labelCol={labelCol} wrapperCol={{span:10}}>
                    <Selection selections = {projects}  defaultValue='CHELL' />
                </FormItem>
                <FormItem label='Task Type' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <Selection selections = {taskTypes}  defaultValue='feature' />
                </FormItem>
                <FormItem label='Summary' {...largeFormItemLayout}>
                    <Input ref='taskSummaryInput' id="taskSummaryInput" placeholder=""/>
                </FormItem>
                <FormItem label='Description' {...largeFormItemLayout}>
                    <Input type="textarea" id="taskDescriptionTextarea" rows="3"/>
                </FormItem>
                <FormItem label='Priority' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <PrioritySlider/>
                </FormItem>
                <FormItem label='Attachement' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <TaskAttachment/>
                </FormItem>
                <FormItem label='Due Date' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <TaskDatePicker />
                </FormItem>
                <Button className='task-submit-btn' size='large' type='primary' onClick={this.props.submitForm}>Create</Button>
            </Form>
        )
    }
}

export default TaskModalForm