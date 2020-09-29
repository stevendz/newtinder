import { Button, TextField } from '@material-ui/core'
import database from '../firebase'
import firebase from 'firebase'
import React, { useState } from 'react'
import styled from 'styled-components'

const SendMessageInputContainer = styled.div`
display:flex;
align-items:flex-end;
>:first-child{
    flex-grow:1;
}
`

function SendMessageInput({ id, sender }) {
    const [message, setMessage] = useState('')
    return (
        <SendMessageInputContainer>
            <TextField onChange={field => setMessage(field.target.value)} />
            <Button onClick={sendMessage} disableElevation color='primary' variant="contained" size="large">Send</Button>
        </SendMessageInputContainer>
    )
    function sendMessage() {
        console.log(id)
        console.log(sender)
        database.collection('chats').doc(id)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion({
                    sender: 'Maria',
                    message,
                    timestamp: Date.now()
                })
            })
    }
}

export default SendMessageInput
