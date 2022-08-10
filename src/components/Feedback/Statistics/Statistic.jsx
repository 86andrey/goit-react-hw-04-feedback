import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Ul>
            <Li>Good: {good}</Li>
            <Li>Neutral: {neutral}</Li>
            <Li>Bad: {bad}</Li>
            <Li>Total: {total}</Li>            
            <Li>Positive feedback: {positivePercentage}%</Li>
        </Ul>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

const Ul = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;`;

const Li = styled.li`
font-size: 18px;
    font-weight: 500;
    padding: 0;`;

export default Statistics;