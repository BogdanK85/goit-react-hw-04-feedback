import PropTypes from 'prop-types';
import React from 'react';
import { ButtonFeedback, FeedbackButtonWrap } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackButtonWrap>
            {options.map(option => (
                <li key={option}>
                    <ButtonFeedback
                        type="button"
                        option={option}
                        onClick={() => onLeaveFeedback(option)}
                        >{option}</ButtonFeedback>
                </li>
            ))}
       </FeedbackButtonWrap>
    )
}

FeedbackOptions.propTypes = {
    onHandleFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}