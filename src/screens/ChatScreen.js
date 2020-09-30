import { database } from '../firebase'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import SendMessageInput from '../components/SendMessageInput'
import Header from '../components/Header'
import { AuthContext } from '../components/AuthProvider'

const ChatScreenContainer = styled.div`
display:flex;
flex-direction:column;
height:100vh;
`

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
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
    const { currentUser } = useContext(AuthContext)
    const { id } = useParams()
    const [messages, setMessages] = useState()
    const [chatPartner, setChatPartner] = useState()
    const [chatPartnerUid, setChatPartnerUid] = useState()

    useEffect(() => {
        console.log('useEffect active')
        const unsubscribe = getChats()
        const unsubscribePartner = getChatPartner()
        return () => {
            unsubscribe();
            unsubscribePartner();
        }
    }, [chatPartnerUid])

    function getChats() {
        const unsubscribe = database
            .collection('chats')
            .doc(id)
            .onSnapshot(snapshot => {
                setMessages(snapshot.data().messages)
                setChatPartnerUid(snapshot.data().members.filter(member => member !== currentUser.uid).toString())
            })
        return unsubscribe
    }
    function getChatPartner() {
        let unsubscribePartner = () => { console.log('Chatpartner not set') }
        if (chatPartnerUid) {
            unsubscribePartner = database
                .collection('users')
                .doc(chatPartnerUid)
                .onSnapshot(snapshot => {
                    setChatPartner(snapshot.data())
                })
        }
        return unsubscribePartner
    }

    return (
        <ChatScreenContainer>
            <Header backButton='/chats' />
            <MatchedText>YOU MATCHED WITH {chatPartner?.username.toUpperCase()} ON 10/08/20</MatchedText>
            <MessageContainer>
                {messages?.map(message => message.sender === currentUser.uid
                    ? <MyMessage key={message.timestamp}>{message.message}</MyMessage>
                    : <Message key={message.timestamp}>{message.message}</Message>
                )}
            </MessageContainer>
            <SendMessageInput id={id} sender={currentUser.uid} />
        </ChatScreenContainer>
    )
}

export default ChatScreen
