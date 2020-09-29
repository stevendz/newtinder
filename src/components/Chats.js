import database from '../firebase'
import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import InvisibleLink from './InvisibleLink'

function Chats() {
    const [chats, setChats] = useState()
    useEffect(() => {
        const unsubscribe = database
            .collection('chats')
            .where('members', 'array-contains', 'Steven')
            .onSnapshot(snapshot => (
                setChats(snapshot.docs.map(doc => doc))
            ))

        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div>
            {chats?.map(chat => {
                const chatPartner = chat.data().members.filter(item => item !== 'Steven').toString()
                return (
                    <InvisibleLink to={`/chats/${chat.id}`} >
                        <Chat
                            key={chat.id}
                            chat={chat.data()}
                            chatPartner={chatPartner}
                        />
                    </InvisibleLink>
                )
            })}
        </div>
    )
}

export default Chats
