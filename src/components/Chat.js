import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'
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
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function Chat({ name, message, timestamp, profilePic }) {
    return (
        <StyledLink to={`/chats/${name}`} >
            <ChatContainer>
                {profilePic ? <Avatar alt={name} src={profilePic} /> : <Avatar>{name.substring(0, 2)}</Avatar>}
                <ChatMessage><h3>{name}</h3><span>{message}</span></ChatMessage>
                <TimeStamp>{timestamp}</TimeStamp>
            </ChatContainer>
        </StyledLink>
    )
}

export default Chat
