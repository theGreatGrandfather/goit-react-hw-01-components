import React from 'react';
import PropTypes from 'prop-types';
import {
    Container, Wrapper, Img, Name, DecorativeContainer,
    Description, Activitis, Label, Value
} from './Userq.styled'

const User = ({ username, tag, location, avatar, stats }) => {

    return (
        <Container>
            <Wrapper>
                <Img src={ avatar} />
                <Name>{username }</Name >
                <Description>@{tag }</Description>
                <Description>{location }</Description>
            </Wrapper>
            <Activitis>
                <DecorativeContainer>
                    <Label >Followers</Label >
                    <Value>{stats.followers}</Value>
                </DecorativeContainer>
                <DecorativeContainer>
                    <Label >Views</Label >
                    <Value>{stats.views}</Value>
                </DecorativeContainer>
                <DecorativeContainer>
                    <Label >Likes</Label >
                    <Value>{stats.likes}</Value>
                </DecorativeContainer>
            </Activitis>
        </Container>
    )
}

User.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
};

export default User;
