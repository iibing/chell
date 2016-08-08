import React from 'react'

const ChatWindowBody = () => (
    <div className='chat-text-area'>
        <p className='chat-text-time'>2016-08-08 21:00</p>
        <div className="chat-message-bubble">
            <div>
                <img size="40" src="http://www.material-ui.com/images/ok-128.jpg" className='chat-window-avator'/>
            </div>
            <div className="chat-message-bubble-box">
                <div className="bubble_bottom">
                    <div className="chat-buddle-content">
                        <div className="chat-bubble-arrow">
                            <div className="W_arrow_bor W_arrow_bor_l">
                                <i></i>
                                <em></em>
                            </div>
                        </div>
                        <div className="bubble_main clearfix">
                            <div className="cont">
                                <p className="page W_f14 W_txt2 ng-binding ng-scope">
                                    Hello from Jimmy!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
)