import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function InvisibleLink({ to, children }) {
    return (
        <StyledLink to={to}>
            {children}
        </StyledLink>
    )
}

export default InvisibleLink
