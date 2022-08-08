import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <Btn type="button" onClick={onLeaveFeedback}>
                            {option}
                        </Btn>
                    </li>
                );
            })}
        </Ul>);
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

const Ul = styled.ul`
align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 0, auto;
`;
const Btn = styled.button`
border-color: inherit;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 22px;
    line-height: 1.15;
    `;

export default FeedbackOptions;
