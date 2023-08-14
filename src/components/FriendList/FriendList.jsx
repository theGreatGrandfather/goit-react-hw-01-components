import React from 'react'

import PropTypes from 'prop-types'

import {FriendList, FriendListItem, Img, Name, Online, Offline} from './FriendList.styled'

const Friends = ({friends}) => {
    return (
        <FriendList>
            {friends.map(elem => 
                <FriendListItem 
                    key={elem.id} 
                >
                    {elem.isOnline? <Online/>: <Offline/>}
                    <Img width='40' src={elem.avatar}/>
                    <Name>
                        {elem.name}
                    </Name>
                </FriendListItem>
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