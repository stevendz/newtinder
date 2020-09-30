import app from 'firebase'
import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, [])
    return (
        <AuthContext.Provider
            value={{ currentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
