import Avatar from '@material-ui/core/Avatar'
import React from 'react'
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
>span{
    color:lightslategray;
}
`
const TimeStamp = styled.div`
display:flex;
align-items:center;
color:lightsteelblue;
`

function Chat({ name, message, timestamp, profilePic }) {
    return (
        <ChatContainer>
            <Avatar alt={name} src={profilePic} />
            <ChatMessage><h3>{name}</h3><span>{message}</span></ChatMessage>
            <TimeStamp>{timestamp}</TimeStamp>
        </ChatContainer>
    )
}

export default Chat
