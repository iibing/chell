import React from 'react'
import {Row, Col} from 'antd'
import ContactList from '../ContactList'
import ChatWindow from '../ChatWindow'

class ChatPanel extends React.Component {
    constructor(props) {
        super(props)
        this.recentContacts = [
            {
                id: 1,
                name: 'Jimmy Lim'
            }, {
                id: 2,
                name: 'Jimmy Lim'
            }, {
                id: 3,
                name: 'Jimmy Lim'
            }
        ]
    }

    render() {
        return (
            <div>
                <h2>Chat</h2>
                <Row gutter={5}>
                    <Col span={6}>
                        <ContactList recentContacts={this.recentContacts}/>
                    </Col>
                    <Col span={16}>
                        <ChatWindow/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatPanel
