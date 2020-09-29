import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import SendMessageInput from './SendMessageInput'

const ChatScreenContainer = styled.div`
display:flex;
flex-direction:column;
`

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
/* TODO: Needs to be fixed to grow to available height */
flex-grow:1;
height:75vh; 
overflow-y:auto;
`
const MyMessage = styled.div`
padding:10px 20px;
margin: 10px;
background: steelblue;
color: #fff;
align-self:flex-end;
border-radius:20px 20px 0 20px;
`
const Message = styled.div`
padding:10px 20px;
margin: 10px;
background: lightsteelblue;
align-self:flex-start;
border-radius:20px 20px 20px 0;
`
const MatchedText = styled.p`
padding:1.5vh;
    color: lightsteelblue;
    text-align:center;
`

function ChatScreen() {
    const { id } = useParams()
    const [messages, setMessages] = useState([
        { name: 'Ellen', message: 'hello there' },
        { name: 'Ellen', message: 'how are you' },
        { name: 'Steven', message: 'fine and you' },
        { name: 'Ellen', message: 'ok' },
        { name: 'Steven', message: 'bye' },
        { name: 'Ellen', message: 'hello there' },
        { name: 'Ellen', message: 'how are you' },
        { name: 'Steven', message: 'fine and you' },
        { name: 'Ellen', message: 'ok' },
        { name: 'Steven', message: 'bye' },
        { name: 'Ellen', message: 'hello there' },
        { name: 'Ellen', message: 'how are you' },
        { name: 'Steven', message: 'fine and you' },
        { name: 'Ellen', message: 'ok' },
        { name: 'Steven', message: 'bye' },
    ])
    return (
        <ChatScreenContainer>
            <MatchedText>YOU MATCHED WITH {id.toUpperCase()} ON 10/08/20</MatchedText>
            <MessageContainer>
                {messages?.map(message => message.name === 'Steven'
                    ? <MyMessage>{message.message}</MyMessage>
                    : <Message>{message.message}</Message>
                )}
            </MessageContainer>
            <SendMessageInput />
        </ChatScreenContainer>
    )
}

export default ChatScreen
