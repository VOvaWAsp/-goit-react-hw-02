import { FcLike, FcDislike, FcLineChart } from 'react-icons/fc';
import { MdOutlineSentimentNeutral } from 'react-icons/md';
import css from './Feedback.module.css';

export const Feedback = ({ value }) => {
  let totalFeedback = value.good + value.neutral + value.bad;
  console.log(value);
  return (
    <div className={css.container}>
      <p className={css.gradientBorder}>
        <FcLike className={css.icon} size={20} /> Good: {value.good}
      </p>
      <p className={css.gradientBorder}>
        <MdOutlineSentimentNeutral className={css.icon} size={20} /> Neutral: {value.neutral}
      </p>
      <p className={css.gradientBorder}>
        <FcDislike className={css.icon} size={20} />
        Bad: {value.bad}
      </p>
      <p className={css.gradientBorder}>
        <FcLineChart className={css.icon} size={20} />
        Positive: {Math.round(((value.good + value.neutral) / +totalFeedback) * 100)}
      </p>
    </div>
  );
};
