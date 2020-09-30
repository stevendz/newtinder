import { Button, TextField } from '@material-ui/core'
import { app, database } from '../firebase'
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
        const { email, password, username } = event.target.elements
        try {
            const userCredential = await app.createUserWithEmailAndPassword(email.value, password.value)
            database.collection('users').doc(userCredential.user.uid).set({
                username: username.value,
                email: email.value,
                profilePic: 'https://www.learning.uclg.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-',
            })
            history.push('/home')
        } catch (error) {
            alert(error)
        }
    }, [history])
    return (
        <SignUpForm onSubmit={handleSignUp}>
            <h1>SignUp Screen</h1>
            <TextField label="Username" name='username' variant="outlined" />
            <TextField label="Email" name='email' variant="outlined" />
            <TextField label="Password" name='password' variant="outlined" />
            <Button type='submit' disableElevation color='primary' variant="contained" size="large">SignUp</Button>
            <Button onClick={() => { history.push('/login') }}>Already an user? Login instead.</Button>
        </SignUpForm>
    )

}

export default SignUpScreen
