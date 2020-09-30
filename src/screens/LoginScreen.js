import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const LoginForm = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
height: 100vh;
padding: 20px;
`

function LoginScreen() {
    return (
        <LoginForm>
            <h1>Login Screen</h1>
            <TextField label="Email" name='email' variant="outlined" />
            <TextField label="Password" name='password' variant="outlined" />
            <Button type='submit' disableElevation color='primary' variant="contained" size="large">Login</Button>
        </LoginForm>
    )
}

export default LoginScreen
