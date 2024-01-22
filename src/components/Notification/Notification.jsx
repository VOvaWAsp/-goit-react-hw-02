import { FcComments } from 'react-icons/fc';
import css from './Notification.module.css';

export const Notification = () => {
  return (
    <>
      <p className={css.text}>
        <FcComments className={css.icon} size={20} />
        No feedback yet
      </p>
    </>
  );
};
