import Avatar from '@material-ui/core/Avatar'
import { database } from '../firebase'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from './AuthProvider'

const ChatContainer = styled.div`
display:flex;
align-content: center;
justify-content: space-between;
padding: 2vh;
border-bottom:1px solid aliceblue;
>:first-child{
    height:5vh !important;
    width:5vh !important;
    margin-right: 2vh;
}
`
const ChatMessage = styled.div`
flex-grow:1;
display:flex;
justify-content:center;
flex-direction: column;
color: #000;
>span{
    color:lightslategray;
}
`
const TimeStamp = styled.div`
display:flex;
align-items:center;
color:lightsteelblue;
`

function Chat({ chat, chatPartnerUid }) {
    const { currentUser } = useContext(AuthContext)
    const [chatPartner, setChatPartner] = useState()
    const [lastMessage, setLastMessage] = useState()
    const [timestamp, setTimestamp] = useState()

    useEffect(() => {
        database
            .collection('users')
            .doc(chatPartnerUid)
            .get()
            .then(doc => setChatPartner(doc.data()))

        const receivedMessages = chat.messages.filter(member => member.sender !== currentUser.uid)
        if (receivedMessages) {
            const count = receivedMessages.length
            setLastMessage(receivedMessages[count - 1].message)
            setTimestamp(Math.floor((Date.now() - receivedMessages[count - 1].timestamp) / 60000))
        }
    }, [])

    if (chatPartner) {

        return (
            <ChatContainer>
                <Avatar alt={chatPartner.username} src={chatPartner.profilePic} />
                <ChatMessage><h3>{chatPartner.username}</h3><span>{lastMessage}</span></ChatMessage>
                <TimeStamp>{timestamp} minutes ago</TimeStamp>
            </ChatContainer>
        )
    } return <span>Loading...</span>
}

export default Chat
