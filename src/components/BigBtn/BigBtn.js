import classes from './BigBtn.module.css';

export const BigBtn = ({ text }) => {
  return (
    <>
      <button className={classes.BigBtn}>{text}</button>
    </>
  );
};
