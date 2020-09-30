import React from 'react'
import Chats from '../components/Chats'
import Header from '../components/Header'

function ChatsScreen() {
    return (
        <div>
            <Header backButton='/' />
            <Chats />
        </div>
    )
}

export default ChatsScreen
