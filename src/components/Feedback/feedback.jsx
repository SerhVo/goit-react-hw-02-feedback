import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import Statistics from "components/Statistics/Statistics";

import {
    BtnFeedback, BtnWrap
} from "./Feedback.styled";

import PropTypes from 'prop-types';

import React, { Component } from 'react';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = event => {
        const value = event.target.innerText;
        this.setState(prevState => ({ [value]: prevState[value] + 1 }));
    };

    countTotalFeedback = () =>
        this.state.good + this.state.neutral + this.state.bad;
    countPositiveFeedbackPercentage = () =>
        Math.round((this.state.good * 100) / this.countTotalFeedback());

    render() {
        const { good, neutral, bad } = this.state;
        const option = ['good', 'neutral', 'bad'];
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOption
                        option={option}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message=":( There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}


const FeedbackOption = ({ option, onLeaveFeedback }) => {
    return (
        <>
            <BtnWrap>
                {option.map(el => (<BtnFeedback key={el} type='button' onClick={onLeaveFeedback}>{el}</BtnFeedback>))}
            </BtnWrap>
        </>
    );
};

FeedbackOption.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;