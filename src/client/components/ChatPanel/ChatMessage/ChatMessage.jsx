import React from 'react'
import ChatSenderBubble from '../ChatSenderBubble'
import ChatReceiverBubble from '../ChatReceiverBubble'

import styleIgnored from './style'

class ChatMessage extends React.Component {
    componentDidMount() {
        let chatMessageDiv = document.getElementById('chatMessage')
        chatMessageDiv.scrollTop = chatMessageDiv.scrollHeight
    }
    render() {
        return (
            <div id='chatMessage' className='chat-text-area'>
                <p className='chat-text-time'>2016-08-08 21:00:00</p>
                <ChatSenderBubble message='Hello from Jimmy'/>
                <p className='chat-text-time'></p>
                <ChatReceiverBubble message='Hi there!'/>
                <p className='chat-text-time'></p>
                <ChatReceiverBubble message='Hi again!'/>
                <p className='chat-text-time'>2016-08-09 21:05:00</p>
                <ChatReceiverBubble message='Bacon ipsum dolor amet turkey andouille tail beef flank bacon. Shankle hamburger bacon, meatloaf landjaeger porchetta tenderloin chicken strip steak ball tip. Tongue flank chicken porchetta. Venison spare ribs biltong pastrami. Bacon chuck ham hock doner, boudin tenderloin short ribs pancetta meatball frankfurter biltong. Swine pork loin leberkas beef, capicola ham sirloin flank bacon venison shankle beef ribs frankfurter jowl. Shank kielbasa ribeye andouille.'/>
                <p className='chat-text-time'>2016-08-09 21:05:00</p>
                <ChatSenderBubble message='Bacon ipsum dolor amet turkey andouille tail beef flank bacon. Shankle hamburger bacon, meatloaf landjaeger porchetta tenderloin chicken strip steak ball tip. Tongue flank chicken porchetta. Venison spare ribs biltong pastrami. Bacon chuck ham hock doner, boudin tenderloin short ribs pancetta meatball frankfurter biltong. Swine pork loin leberkas beef, capicola ham sirloin flank bacon venison shankle beef ribs frankfurter jowl. Shank kielbasa ribeye andouille.'/>
                <p className='chat-text-time'></p>
                <ChatSenderBubble message='Bacon ipsum dolor amet turkey andouille tail beef flank bacon. Shankle hamburger bacon, meatloaf landjaeger porchetta tenderloin chicken strip steak ball tip. Tongue flank chicken porchetta. Venison spare ribs biltong pastrami. Bacon chuck ham hock doner, boudin tenderloin short ribs pancetta meatball frankfurter biltong. Swine pork loin leberkas beef, capicola ham sirloin flank bacon venison shankle beef ribs frankfurter jowl. Shank kielbasa ribeye andouille.'/>
            </div>
        )
    }
}

export default ChatMessage