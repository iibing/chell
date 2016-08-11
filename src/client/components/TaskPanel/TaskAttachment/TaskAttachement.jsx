import React from 'react'
import {Upload, Icon} from 'antd'

const Dragger = Upload.Dragger

const props = {
    name: 'file',
    showUploadList: false,
    action: '/upload.do'
}

const TaskAttachement = () => (
    <div style={{height: '70px', width:'200px'}}>
        <Dragger {...props}>
            <Icon type="plus"/>
        </Dragger>
    </div>
)

export default TaskAttachement