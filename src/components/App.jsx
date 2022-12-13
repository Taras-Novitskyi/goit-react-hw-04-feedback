import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Box } from './Box/Box';
import { Notification } from './Notification/Notification';

export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const onLeaveFeedback = event => {
    const target = event.target.name;

    switch (target) {
      case "good":
        setGood(state => state + 1)
        break;
      
      case "neutral":
        setNeutral(state => state + 1)
        break;
      
      case "bad":
        setBad(state => state + 1)
        break;
    
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad))
  }

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Box
          width="1200px"
          p="20px"
          lineHeight="1"
          borderRadius="4px"
          bg="rgb(249, 249, 249)"
          display="flex"
          flexDirection="column"
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(options)}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            </Section>
          )}
        </Box>
      </div>
    );
}

