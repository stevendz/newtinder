import { Button, TextField } from '@material-ui/core'
import { database } from '../firebase'
import firebase from 'firebase'
import React, { useCallback } from 'react'
import styled from 'styled-components'

const SendMessageInputContainer = styled.form`
display:flex;
align-items:flex-end;
>:first-child{
    flex-grow:1;
}
`

function SendMessageInput({ id, sender }) {
    const handleSendMessage = useCallback(async event => {
        event.preventDefault()
        const { message } = event.target.elements
        try {
            database.collection('chats').doc(id)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        sender,
                        message: message.value,
                        timestamp: Date.now()
                    })
                })
            message.value = ''

        } catch (error) {
            alert(error)
        }
    }, [])
    return (
        <SendMessageInputContainer onSubmit={handleSendMessage}>
            <TextField name='message' />
            <Button type='submit' disableElevation color='primary' variant="contained" size="large">Send</Button>
        </SendMessageInputContainer>
    )
}

export default SendMessageInput
