import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import styled from 'styled-components'
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
    const [people, setPeople] = useState([
        { name: 'steve jobs', url: 'https://swashvillage.org/storage/img/images_4/steve-jobs-biography_2.jpg' },
        { name: 'mark zuckerberg', url: 'https://i.guim.co.uk/img/media/9eb0a1cd9f8abb5ef85b25ac1f62f02beb4c7efa/0_26_2048_1229/master/2048.jpg?width=700&quality=85&auto=format&fit=max&s=05591346110a83d0c679cab31c11304d' }
    ])
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
