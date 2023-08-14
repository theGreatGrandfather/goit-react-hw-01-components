import styled from '@emotion/styled';

export const FriendList = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
margin-top: 30px;
width: 400px;
align-self: center;
gap: 15px;
`
export const FriendListItem = styled.li`
display: flex;
/* justify-content: space-between; */
align-items: center;
gap: 30px;
width: 100%;
padding: 10px 20px;
border: 2px solid grey;
border-radius: 8px;
/* background-color: ${`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`}; */
`

export const Img = styled.img`
display: block;
 
`

export const Online = styled.span`
display: block;
background-color: green;
width: 20px;
height: 20px;
border-radius: 50%;
`
export const Offline = styled.span`
display: block;
background-color: red;
width: 20px;
height: 20px;
border-radius: 50%;
`
export const Name = styled.p`
display: block;
font-size: 24px;
font-weight: 500;
`