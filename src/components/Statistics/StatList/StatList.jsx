import React from 'react'
import PropTypes from 'prop-types'

import {List, Item, Label, Value} from './StatList.styled'

const StatList = ({data}) => {
    return (
        <List>
            {data.map(elem => 
                <Item 
                    key={elem.id} 
                    style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`}}>
                    <Label>
                        {elem.label}
                    </Label>
                    <Value>
                        {elem.percentage}%
                    </Value>
                </Item>
            )}
        </List>
    )
};

StatList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}

export default StatList