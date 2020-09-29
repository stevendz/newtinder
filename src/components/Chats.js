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
            {chats?.map(chat =>
                <InvisibleLink to={`/chats/${chat.id}`} >
                    <Chat
                        key={chat.id}
                        name={chat.data().members[0]}
                        message='Hey! how are you 😊'
                        timestamp='35 minutes ago'
                        profilePic='https://www.crew-united.com/Media/Images/1028/1028860/1028860.entity.4_3.jpg'
                    />
                </InvisibleLink>
            )}
        </div>
    )
}

export default Chats
