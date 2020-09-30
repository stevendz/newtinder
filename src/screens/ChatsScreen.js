import { database } from '../firebase'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Chat from '../components/Chat'
import InvisibleLink from '../components/InvisibleLink'
import { AuthContext } from '../components/AuthProvider'

function ChatsScreen() {
    const { currentUser } = useContext(AuthContext)
    const [chats, setChats] = useState()
    const [chatPartner, setChatPartner] = useState()
    const [chatPartnerUid, setChatPartnerUid] = useState(null)

    useEffect(() => {
        console.log('useEffect active')
        const unsubscribe = getChats()
        getChatPartner()
        return () => {
            unsubscribe();
        }
    }, [])

    function getChats() {
        const unsubscribe = database
            .collection('chats')
            .where('members', 'array-contains', currentUser.uid)
            .onSnapshot(snapshot => {
                setChats(snapshot.docs.map(doc => doc))
                setChatPartnerUid(snapshot.docs.map(doc => doc.data().members.filter(member => member !== currentUser.uid)))
            })
        return unsubscribe
    }
    function getChatPartner() {
        if (chatPartnerUid) {
            database
                .collection('users')
                .doc(chatPartnerUid.toString())
                .get()
                .then(doc => setChatPartner(doc.data()))
        }
    }
    return (
        <div>
            <Header backButton='/' />

            {chats?.map(chat => {
                return (
                    <InvisibleLink key={chat.id} to={`/chats/${chat.id}`} >
                        {
                            chatPartnerUid !== null
                                ? <Chat
                                    key={chat.id}
                                    chat={chat.data()}
                                    chatPartnerUid={chatPartnerUid.toString()}
                                />
                                : <h2>Loading...</h2>
                        }

                    </InvisibleLink>
                )
            })
            }

        </div>
    )
}

export default ChatsScreen
