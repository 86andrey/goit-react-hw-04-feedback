import {useState} from 'react';
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from './Notification';
import styled from 'styled-components';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutal => prevNeutal + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };
  
  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => Math.floor((good * 100) / countTotalFeedback());

  const options = [ 'good', 'neutral', 'bad' ];

return (
      <>
      <Card>
        <Section title='Leave your feedback please'>
          <FeedbackOptions options={options} onLeaveFeedback={handleIncrement}/>
        </Section>
        <Section title='Statistics'>
          {total === 0 ? (<Notification message={'There is no feedback'} />) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()} />
          )}
        </Section>
        </Card>
        </>
    );
  };


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
