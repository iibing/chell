import React from 'react'
import {Upload, Icon} from 'antd'
import styleIgnored from './style'
const Dragger = Upload.Dragger

const props = {
    name: 'file',
    showUploadList: false,
    action: '/upload.do'
}

const TaskAttachment = () => (
    <div className='task-attachment'>
        <Dragger {...props}>
            <Icon type="plus"/>
        </Dragger>
    </div>
)

export default TaskAttachment