import React, { useState } from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
>p{
    padding:1.5vh;
    color: lightsteelblue;
}
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

function ChatScreen() {
    const [messages, setMessages] = useState([
        { name: 'Ellen', message: 'hello there' },
        { name: 'Ellen', message: 'how are you' },
        { name: 'Steven', message: 'fine and you' },
        { name: 'Ellen', message: 'ok' },
        { name: 'Steven', message: 'bye' },
    ])
    return (
        <MessageContainer>
            <p>YOU MATCHED WITH SARAH ON 10/08/20</p>
            {messages.map(message => message.name === 'Steven'
                ? <MyMessage>{message.message}</MyMessage>
                : <Message>{message.message}</Message>
            )}
        </MessageContainer>
    )
}

export default ChatScreen
