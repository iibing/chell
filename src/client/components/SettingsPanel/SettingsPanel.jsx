import React from 'react'
import {Row, Col} from 'antd'
import styleIgnored from './style'

class SettingsPanel extends React.Component {
    render() {
        return (
            <div>
                <h2>Settings</h2>
                <Row gutter={2}>
                <Col span={16}>
                    <div className='settings-body'></div>    
                </Col>
                </Row>
            </div>
        )
    }
}

export default SettingsPanel