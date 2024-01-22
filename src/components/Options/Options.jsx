import css from './Option.module.css';

export const Options = ({ onUpdate, reset, active, notactive }) => {
  return (
    <div className={css.container}>
      {notactive === true ? (
        <button className={css.rainbowBtn} onClick={() => onUpdate('good')}>
          <span>Good</span>
        </button>
      ) : null}
      {notactive === true ? (
        <button className={css.rainbowBtn} onClick={() => onUpdate('neutral')}>
          <span>Neutral</span>
        </button>
      ) : null}
      {notactive === true ? (
        <button className={css.rainbowBtn} onClick={() => onUpdate('bad')}>
          <span>Bad</span>
        </button>
      ) : null}
      {active === false ? null : (
        <button className={css.rainbowBtn} onClick={() => reset()}>
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};
