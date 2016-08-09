import React, {PropTypes} from 'react'
import {Icon} from 'antd'
import styleIgnored from './style'

const propTypes = {
    contact : PropTypes.shape({id:PropTypes.number.isRequired,name:PropTypes.string.isRequired}).isRequired
}
const Contact = ({contact}) => (
    <div className='contact-list-item'>
        <Icon type="message" className='contact-message-icon'/>
        <img size="40" src="http://www.material-ui.com/images/ok-128.jpg" className='contact-avator'/>
        <div>{contact.name}</div>
    </div>
)

Contact.propTypes = propTypes

export default Contact