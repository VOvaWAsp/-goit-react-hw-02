import { Description } from './Description/Description';
import { useState, useEffect } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = window.localStorage.getItem('save-feedback');

    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  console.log(feedback);

  const handleClick = type => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  const reset = () => {
    setFeedback({ ...feedback, ['good']: 0, ['neutral']: 0, ['bad']: 0 });
  };

  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  console.log(feedback);

  useEffect(() => {
    window.localStorage.setItem(
      'save-feedback',
      JSON.stringify({
        good: feedback.good,
        neutral: feedback.neutral,
        bad: feedback.bad,
      })
    );
  }, [feedback.good, feedback.neutral, feedback.bad]);

  return (
    <div>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options onUpdate={handleClick} notactive={true} active={false} reset={reset} />
      {totalFeedback === 0 || <Options notactive={false} active={true} reset={reset} />}
      {totalFeedback === 0 ? <Notification /> : <Feedback value={feedback} />}
    </div>
  );
};
