import React from 'react'

import {Table} from './TransactionHistory.styled'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'

const TransactionHistory = ({transactions}) => {
    return (
    <Table>
        <TableHead/>
        <TableBody transactions={transactions}/>
    </Table>
    );
};


export default TransactionHistory