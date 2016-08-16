import React, {PropTypes} from 'react'
import {Form, Input, Button} from 'antd'
import {reduxForm} from 'redux-form'
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

const propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}
class TaskModalForm extends React.Component {
    
    render() {
        const {fields: {project,type,summary,description, priority},handleSubmit,submitting } = this.props
        return (
            <Form horizontal >
                <FormItem label='Project' labelCol={labelCol} wrapperCol={{span:10}}>
                    <Selection selections = {projects}  defaultValue={project.value || 'CHELL'} {...project} value={project.value || ''}/>
                </FormItem>
                <FormItem label='Task Type' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <Selection selections = {taskTypes}  defaultValue='feature' {...type} value={type.value || ''}/>
                </FormItem>
                <FormItem label='Summary' {...largeFormItemLayout} validateStatus={summary.touched && summary.error?'error':'success'} help={summary.touched && summary.error?summary.error:''} hasFeedback={summary.touched}>
                    <Input ref='taskSummaryInput' id="taskSummaryInput" placeholder="What is next giant step?" {...summary} />
                </FormItem>
                <FormItem label='Description' {...largeFormItemLayout}>
                    <Input type="textarea" id="taskDescriptionTextarea" rows="3" {...description}/>
                </FormItem>
                <FormItem label='Priority' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <PrioritySlider {...priority}/>
                </FormItem>
                <FormItem label='Attachement' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <TaskAttachment/>
                </FormItem>
                <FormItem label='Due Date' labelCol={labelCol} wrapperCol={tinyFormWrapperCol}>
                    <TaskDatePicker />
                </FormItem>
                <Button className='task-submit-btn' size='large' type='primary' disabled={submitting} onClick={handleSubmit}>Create</Button>
            </Form>
        )
    }
}
TaskModalForm.propTypes = propTypes

const validate  = values => {
    const errors = {}
    if(!values.summary) {
        errors.summary = 'say something'
    } else if(values.summary.length > 140) {
        errors.summary = 'try not make it shorter'
    }
    return errors
}

export default reduxForm({
    form: 'task',
    fields: ['project','type','summary','description', 'priority'],
    validate
}, state => ({
    initialValues: state.taskForm.formData
}))(TaskModalForm)