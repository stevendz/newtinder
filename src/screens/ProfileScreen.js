import { Avatar, Button } from '@material-ui/core'
import { app, database } from '../firebase'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/AuthProvider'
import Header from '../components/Header'

function ProfileScreen() {
    const { currentUser } = useContext(AuthContext)
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const unsubscribe = database
            .collection('users')
            .doc(currentUser.uid)
            .onSnapshot(snapshot => (
                setUserData(snapshot.data())
            ))
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div>
            <Header backButton='/' />
            <h2>{userData.username}</h2>
            <h2>{userData.email}</h2>
            <Avatar alt={userData.username} src={userData.profilePic}></Avatar>
            <Button onClick={() => { app.signOut() }}>Logout</Button>
        </div>
    )
}

export default ProfileScreen
