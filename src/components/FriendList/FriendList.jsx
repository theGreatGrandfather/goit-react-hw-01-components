import React from 'react'
import PropTypes from 'prop-types'
import {List, Item, Img, Name, Online, Offline} from './FriendList.styled'

const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(elem => 
                <Item 
                    key={elem.id} 
                >
                    {elem.isOnline? <Online/>: <Offline/>}
                    <Img width='40' src={elem.avatar}/>
                    <Name>
                        {elem.name}
                    </Name>
                </Item>
            )}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default FriendList