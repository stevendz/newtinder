import React from 'react'
import styled from 'styled-components';
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import { IconButton } from '@material-ui/core';

const SwipeButtonsRow = styled.div`
position:fixed;
bottom: 10vh;
width:100%;
display:flex;
justify-content: space-evenly;
>*{
    padding:1.5vh !important;
    box-shadow: 0 10px 50px 0 rgba(0,0,0,0.25);
}
`;

function SwipeButtons() {
    return (
        <SwipeButtonsRow>
            <IconButton>
                <ReplayIcon fontSize='large' style={{ color: 'sandybrown' }} />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' style={{ color: 'indianred' }} />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large' style={{ color: 'lightskyblue' }} />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' style={{ color: 'aquamarine' }} />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large' style={{ color: 'mediumpurple' }} />
            </IconButton>
        </SwipeButtonsRow>
    )
}

export default SwipeButtons
