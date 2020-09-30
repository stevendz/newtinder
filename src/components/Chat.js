import Avatar from '@material-ui/core/Avatar'
import { database } from '../firebase'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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

function Chat({ chat, chatPartner }) {
    const [partnerProfilePic, setPartnerProfilePic] = useState()
    const [lastMessage, setLastMessage] = useState()
    const [timestamp, setTimestamp] = useState()

    useEffect(() => {
        database
            .collection('people')
            .where('name', '==', chatPartner)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setPartnerProfilePic(doc.data().url);
                });
            })
        const receivedMessages = chat.messages.filter(member => member.sender !== 'Steven')
        if (receivedMessages) {
            const count = receivedMessages.length
            setLastMessage(receivedMessages[count - 1].message)
            setTimestamp(Math.floor((Date.now() - receivedMessages[count - 1].timestamp) / 60000))
        }
    }, [])

    return (
        <ChatContainer>
            {partnerProfilePic ? <Avatar alt={chatPartner} src={partnerProfilePic} /> : <Avatar>{chatPartner.substring(0, 2)}</Avatar>}
            <ChatMessage><h3>{chatPartner}</h3><span>{lastMessage}</span></ChatMessage>
            <TimeStamp>{timestamp} minutes ago</TimeStamp>
        </ChatContainer>
    )
}

export default Chat
