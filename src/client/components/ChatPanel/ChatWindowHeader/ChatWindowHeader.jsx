import React, {PropTypes} from 'react'
import styleIgnored from './style'

const propTypes = {
    contact: PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})
}

const ChatWindowHeader = ({contact}) => (
    <div className='chat-window-header'>
        <p className='chat-header-title'>
            <span className='chat-title-text'>{contact.name}</span>
        </p>
    </div>
)

ChatWindowHeader.propTypes = propTypes
export default ChatWindowHeader