import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import styled from 'styled-components'
import database from '../firebase';
import MyTinderCard from './MyTinderCard'

const TinderCardsContainer = styled.div`
display:flex;
justify-content:center;
margin-top:5vh;
>*{
    position:absolute;
}
`;

function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ))
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <TinderCardsContainer>
            {people.map(person => (
                <TinderCard key={person.name} preventSwipe={['up', 'down']}>
                    <MyTinderCard person={person} />
                </TinderCard>
            ))}
        </TinderCardsContainer>
    )
}

export default TinderCards
