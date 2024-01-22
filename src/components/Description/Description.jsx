import css from './Description.module.css';

export const Description = ({ title, description }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{description}</p>
    </div>
  );
};
