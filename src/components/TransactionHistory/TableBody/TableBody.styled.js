import styled from '@emotion/styled';

export const Tbody = styled.tbody`
width: 100%;
`
export const Tr = styled.tr`
padding: 10px;
width:350px;
background-color: gray;
&:nth-of-type(2n) {
    background-color: #e5e5e5;
}
`
export const Td = styled.td`
padding: 10px;
text-align: center;
`