import { Button, TextField } from '@material-ui/core'
import { app } from '../firebase'
import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../components/AuthProvider'
import { Redirect } from 'react-router-dom'

const LoginForm = styled.form`
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

function LoginScreen({ history }) {
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app.signInWithEmailAndPassword(email.value, password.value)
            history.push('/home')
        } catch (error) {
            alert(error)
        }
    }, [history])
    const { currentUser } = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to='/home' />
    }
    return (
        <LoginForm onSubmit={handleLogin}>
            <h1>Login Screen</h1>
            <TextField label="Email" name='email' variant="outlined" />
            <TextField label="Password" name='password' variant="outlined" />
            <Button type='submit' disableElevation color='primary' variant="contained" size="large">Login</Button>
            <Button onClick={() => { history.push('/signup') }}>No account? Sign up instead.</Button>
        </LoginForm>
    )

}

export default LoginScreen
