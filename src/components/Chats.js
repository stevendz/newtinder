import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div>
            <Chat
                name='Sarah'
                message='Hey! how are you 😊'
                timestamp='35 minutes ago'
                profilePic='https://www.crew-united.com/Media/Images/1028/1028860/1028860.entity.4_3.jpg'
            />
            <Chat
                name='Ellen'
                message='Whats up?'
                timestamp='12 minutes ago'
                profilePic='https://smartcdn.prod.postmedia.digital/nationalpost/wp-content/uploads/2019/02/cpt118-the-associated-press.jpg?quality=100&strip=all&w=642'
            />
            <Chat
                name='Sarah'
                message='Hey! how are you 😊'
                timestamp='35 minutes ago'
            // profilePic='https://www.crew-united.com/Media/Images/1028/1028860/1028860.entity.4_3.jpg'
            />
            <Chat
                name='Ellen'
                message='Whats up?'
                timestamp='12 minutes ago'
                profilePic='https://smartcdn.prod.postmedia.digital/nationalpost/wp-content/uploads/2019/02/cpt118-the-associated-press.jpg?quality=100&strip=all&w=642'
            />
        </div>
    )
}

export default Chats
