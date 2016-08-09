import React from 'react'
import ChatWindowHeader from '../ChatWindowHeader'
import ChatWindowBody from '../ChatWindowBody'
import ChatInputArea from '../ChatInputArea'
import styleIgnored from './style'

class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
        this.contact = {id:1,name:'Jimmy Lim'}
    }
    render() {
        return (
            <div className='chatWindow'>
                <ChatWindowHeader contact={this.contact}/>
                <ChatWindowBody />
                <ChatInputArea />
            </div>
        )
    }
}

export default ChatWindow