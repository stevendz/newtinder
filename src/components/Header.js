import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom';

const Navbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`;
const LogoImg = styled.img`
height: 40px;
`;

export default function Header({ backButton }) {
    const history = useHistory();
    return (
        <Navbar>
            {backButton
                ? <IconButton onClick={() => history.goBack()}>
                    <ArrowBackIosIcon fontSize='large' />
                </IconButton>
                : <IconButton onClick={() => history.push('/profile')}>
                    <PersonIcon fontSize='large' />
                </IconButton>
            }
            <LogoImg src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt='logo' />
            <IconButton onClick={() => history.push('/chats')}>
                <ForumIcon fontSize='large' />
            </IconButton>
        </Navbar>
    )
}
