import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background:url(${props => (props.url)});
    background-position:center;
    background-size:cover;
    position: relative;
    display:flex;
    align-items:flex-end;
    padding: 20px;
    width:600px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    color: #fff;
    `

function MyTinderCard({ person }) {
    return (
        <Card url={person.url}>
            <h2>{person.name}</h2>
        </Card>
    )
}

export default MyTinderCard
