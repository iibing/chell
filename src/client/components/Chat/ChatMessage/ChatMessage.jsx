import React from 'react'
import ChatSenderBubble from '../ChatSenderBubble'

import styleIgnored from './style'

const ChatMessage = () => (
    <div className='chat-text-area'>
        <p className='chat-text-time'>2016-08-08 21:00:00</p>
        <ChatSenderBubble message='Hello from Jimmy' />
    </div>
)

export default ChatMessage