import React from 'react'
import PropTypes from 'prop-types'

import {Tbody, Tr, Td} from './TableBody.styled'


const TableBody = ({transactions}) => {
  return (
    <Tbody>
        {transactions.map(elem => 
            <Tr key={elem.id}>
                <Td>{elem.type}</Td>
                <Td>{elem.amount}</Td>
                <Td>{elem.currency}</Td>
            </Tr>
            )}
    </Tbody>
    )
}

TableBody.propTypes={
    transactions:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}

export default TableBody

