import database from '../firebase'
import React, { useEffect, useState } from 'react'
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
    const [messages, setMessages] = useState()
    const [chatPartner, setChatPartner] = useState()
    useEffect(() => {
        const unsubscribe = database
            .collection('chats')
            .doc(id)
            .onSnapshot(snapshot => {
                setMessages(snapshot.data().messages)
                setChatPartner(snapshot.data().members.filter(member => member !== 'Steven').toString())
            })

        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <ChatScreenContainer>
            <MatchedText>YOU MATCHED WITH {chatPartner?.toUpperCase()} ON 10/08/20</MatchedText>
            <MessageContainer>
                {messages?.map(message => message.sender === 'Steven'
                    ? <MyMessage>{message.message}</MyMessage>
                    : <Message>{message.message}</Message>
                )}
            </MessageContainer>
            <SendMessageInput />
        </ChatScreenContainer>
    )
}

export default ChatScreen
