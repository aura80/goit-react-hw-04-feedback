import { useState, useEffect } from "react";
import { FeedbackContext } from './FeedbackContext';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    console.log('Component updated: ', {good, neutral, bad});
  }, [good, neutral, bad]);

  const handleLeaveFeedback = (option) => {
    console.log('Option clicked: ', option);

    switch (option) {
      case 'good':
        setGood(previousGood => previousGood + 1);
        break;
      case 'neutral':
        setNeutral(previousNeutral => previousNeutral + 1);
        break;
      case 'bad':
        setBad(previousBad => previousBad + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  console.log('Render: ', { good, neutral, bad });

  return (
    <FeedbackContext.Provider
      value={{ options, onLeaveFeedback: handleLeaveFeedback }}
    >
      <div>
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
          /> */}
          <FeedbackOptions />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </FeedbackContext.Provider>
  );
}
