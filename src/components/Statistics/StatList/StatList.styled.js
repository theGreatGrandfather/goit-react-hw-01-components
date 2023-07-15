import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
padding: 0;
margin: 0;
width: 100%;
align-self: center;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;
width: 100%;
padding: 10px 15px;
/* background-color: ${`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`}; */
`
export const Label = styled.span`
display: block;
font-size: 18px;
font-weight: 400;
`
export const Value = styled.span`
display: block;
font-size: 24px;
font-weight: 500;
`
