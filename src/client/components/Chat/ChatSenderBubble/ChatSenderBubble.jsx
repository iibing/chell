import React, {PropTypes} from 'react'
import styleIgnored from './style'

const propTypes = {
    message: PropTypes.string.isRequired
}
const ChatSenderBubble = ({message}) => (
    <div className="chat-message-bubble">
        <div>
            <img size="40" src="http://www.material-ui.com/images/ok-128.jpg" className='chat-window-avator'/>
        </div>

        <div className="chat-message-bubble-box">
            <div className="bubble_bottom">
                <div className="chat-bubble-content">
                    <div className="chat-bubble-arrow">
                        <i></i>
                        <em></em>
                    </div>
                    <div className="bubble_main clearfix">
                        <div className="cont">
                            <p className="page W_f14 W_txt2 ng-binding ng-scope">
                                {message}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
)

ChatSenderBubble.propTypes = propTypes
export default ChatSenderBubble