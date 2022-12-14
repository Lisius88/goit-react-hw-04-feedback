import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { MainContent } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedback = { good, neutral, bad };
  const feedbackOptions = Object.keys(feedback);
  const total = good + neutral + bad;
  const percents = Math.floor((good / total) * 100);

  const handleButtonClick = event => {
    const buttonName = event.target.name;

    if (buttonName === 'good') {
      setGood(prev => prev + 1);
    }
    if (buttonName === 'bad') {
      setBad(prev => prev + 1);
    }
    if (buttonName === 'neutral') {
      setNeutral(prev => prev + 1);
    }
  };

  return (
    <MainContent>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={feedbackOptions}
          incrementStatisticsData={handleButtonClick}
        />
      </Section>
      {total === 0 ? (
        <Section title={'Statisctics'}>
          <Notification message={'There is no feedback'} />
        </Section>
      ) : (
        <Section title={'Statisctics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percents}
          />
        </Section>
      )}
    </MainContent>
  );
};
