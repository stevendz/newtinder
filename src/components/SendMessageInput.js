import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'

const SendMessageInputContainer = styled.form`
display:flex;
align-items:flex-end;
>:first-child{
    flex-grow:1;
}
`

function SendMessageInput() {
    const [message, setMessage] = useState('')
    return (
        <SendMessageInputContainer>
            <TextField onChange={field => setMessage(field.target.value)} />
            <Button onClick={sendMessage} disableElevation color='primary' variant="contained" size="large">Send</Button>
        </SendMessageInputContainer>
    )
    function sendMessage() {
        console.log(message)
    }
}

export default SendMessageInput
