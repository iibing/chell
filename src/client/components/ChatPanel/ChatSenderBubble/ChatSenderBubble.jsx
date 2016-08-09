import React, {PropTypes} from 'react'
import styleIgnored from './style'

const propTypes = {
    message: PropTypes.string.isRequired
}
const ChatSenderBubble = ({message}) => (
    <div className="chat-sender-bubble">
        <div className='chat-sender-avator'>
            <img src="http://www.material-ui.com/images/ok-128.jpg" className='chat-window-avator'/>
        </div>
        <div className="chat-bubble-content">
            <div className="chat-bubble-arrow">
                <i></i>
            </div>
            <div className="chat-bubble-message">
                {message}
            </div>
        </div>
    </div>
)

ChatSenderBubble.propTypes = propTypes
export default ChatSenderBubble