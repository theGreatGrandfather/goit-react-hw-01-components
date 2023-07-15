import React from 'react'
import PropTypes from 'prop-types'
import {Section, Title} from './Statistics.styled'
import StatList from './StatList/StatList'

const Statistics =( {title, data}) => {
    return (
        <Section>
            <Title>{title}</Title>
            <StatList data={data}/>
        </Section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Statistics