import React from 'react'
import { Thead, Tr, Th} from './TableHead.styled'

const TableHead = () => {
    return (
        <Thead>
            <Tr>
                <Th>
                Type
                </Th>
                <Th>
                Amount
                </Th>
                <Th>
                Currency
                </Th>
            </Tr>
        </Thead>
    );
};


export default TableHead