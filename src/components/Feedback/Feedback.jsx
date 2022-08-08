import React from 'react';
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from './Notification';
import styled from 'styled-components';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const e = event.target.textContent;
    this.setState(prevState => {
      return { [e]: prevState[e] + 1 };
    });
  };

  countTotalFeedback() {
    const arrayDataCount = Object.values(this.state);
    const count =  arrayDataCount.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return count;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const keyName = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
      <Card>
        <Section title='Leave your feedback please'>
          <FeedbackOptions options={keyName} onLeaveFeedback={this.handleIncrement}/>
        </Section>
        <Section title='Statistics'>
          {total === 0 ? (<Notification message={'There is no feedback'} />) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={percentage} />
          )}
        </Section>
        </Card>
        </>
    );
  }
}

const Card = styled.div`
border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 10px 10px 8px 2px rgb(0 0 0 / 30%);
    color: #010101;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin: 40px auto 0;
    padding: 20px;
    width: 400px;
    background-color: rgb(250,240,230);`;


export default Feedback;
