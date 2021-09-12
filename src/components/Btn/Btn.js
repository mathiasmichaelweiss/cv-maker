import classes from './Btn.module.css';

export const Btn = ({ text, makeAction }) => {
  return (
    <>
      <button
        className={classes.Btn}
        style={{ background: '#00C45F' }}
        onClick={makeAction}
      >
        {text}
      </button>
    </>
  );
};
