import { Button, TextField } from '@material-ui/core'
import { app } from '../firebase'
import React, { useCallback } from 'react'
import styled from 'styled-components'

const SignUpForm = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
height: 100vh;
padding: 20px;
>h1{
    margin-bottom:20px
}
>div{
    margin-bottom:20px
}
`

function SignUpScreen({ history }) {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app.createUserWithEmailAndPassword(email.value, password.value)
            history.push('/home')
        } catch (error) {
            alert(error)
        }
    }, [history])
    return (
        <SignUpForm onSubmit={handleSignUp}>
            <h1>SignUp Screen</h1>
            <TextField label="Email" name='email' variant="outlined" />
            <TextField label="Password" name='password' variant="outlined" />
            <Button type='submit' disableElevation color='primary' variant="contained" size="large">SignUp</Button>
            <Button onClick={() => { history.push('/login') }}>Already an user? Login instead.</Button>
        </SignUpForm>
    )

}

export default SignUpScreen
