import React from 'react';

import {Item, Img, Name, Online, Offline} from './FriendListItem.styled'

const FriendListItem = ({id, isOnline, name, avatar}) => {
    return (
        <Item 
            key={id}
        >
            {isOnline? <Online/>: <Offline/>}
            <Img width='40' src={avatar}/>
            <Name>
                {name}
            </Name>
        </Item>
    )
};

export default FriendListItem