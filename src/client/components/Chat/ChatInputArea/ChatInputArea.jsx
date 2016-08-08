import React from 'react'
import styleIgnored from './style'


const ChatInputArea = () => (

    <div className='chat-input-pannel'>
        <div>
            <textarea className='chat-input-area'></textarea>
        </div>
        <p>按下Enter发送内容/ Ctrl+Enter换行</p>
    </div>
)
export default ChatInputArea