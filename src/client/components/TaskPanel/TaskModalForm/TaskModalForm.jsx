import React from 'react'
import {Form, Input, Button, Select, Checkbox} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

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

class TaskModalForm extends React.Component {
    render() {
        return (
            <Form horizontal>
                <FormItem label='Task Summary' {...largeFormItemLayout}>
                    <Input ref='taskSummaryInput' id="taskSummaryInput" placeholder=""/>
                </FormItem>
                <FormItem label='Project' labelCol={labelCol} wrapperCol={smallFormWrapperCol}>
                    <Select id="projectSelect" size="large" defaultValue="CHELL" onChange={(value)=>console.log(value)}>
                        <Option value="CHELL">CHELL</Option>
                        <Option value="PHOENIX">PHOENIX</Option>
                        <Option value="PRDM">PRDM</Option>
                    </Select>
                </FormItem>
                <FormItem label='Description' {...largeFormItemLayout}>
                    <Input type="textarea" id="taskDescriptionTextarea" rows="4" />
                </FormItem>
            </Form>
        )
    }
}

export default TaskModalForm