import React, {PropTypes} from 'react'
import styleIgnored from './style'
const propTypes = {
    message: PropTypes.string.isRequired
}

const ChatReceiverBubble = ({message}) => (
    <div className="chat-receiver-bubble">
        <div className='chat-receiver-avator'>
            <img src="http://www.material-ui.com/images/ok-128.jpg" className='chat-window-avator'/>
        </div>
        <div className="chat-receiver-bubble-content">
            <div className="chat-receiver-bubble-arrow">
                <i></i>
            </div>
            <div className="chat-receiver-bubble-message">
                {message}
            </div>
        </div>
    </div>
)

ChatReceiverBubble.propTypes = propTypes

export default ChatReceiverBubble