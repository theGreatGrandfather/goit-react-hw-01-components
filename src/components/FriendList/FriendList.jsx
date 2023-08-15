import React from 'react'
import PropTypes from 'prop-types'

import FriendListItem from './FrendrListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

const Friends = ({friends}) => {
    return (
        <FriendList>
            {friends.map(elem => 
                <FriendListItem
                    key={elem.id}
                    isOnline={elem.isOnline}
                    name={elem.name}
                    avatar={elem.avatar}
                />
            )}    
        </FriendList>
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

export default Friends