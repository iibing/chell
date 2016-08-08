import React, {PropTypes} from 'react'
import {Collapse} from 'antd'
import Contact from '../Contact'
import SearchInput from '../SearchInput'
import styleIgnored from './style'

const Panel = Collapse.Panel

const propTypes = {
    recentContacts: PropTypes.array.isRequired
}
const ContactList = ({recentContacts}) => (
    <div className='chat-contact-pannel'>
        <SearchInput className='ant-search-input'/>
        <div className='chat-list-header'>Recent chats</div>
        <div className='recent-chat-list'>
            {recentContacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
        </div>
        <div className='chat-list-header'>Contacts</div>
        <Collapse defaultActiveKey={['1']}>
            <Panel header="Team" key="1">
                {recentContacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
            </Panel>
            <Panel header="Team 2" key="2">
                {recentContacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
            </Panel>
        </Collapse>
    </div>
)

ContactList.propTypes = propTypes

export default ContactList
