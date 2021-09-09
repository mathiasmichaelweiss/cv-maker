import classes from './Tag.module.css';

export const Tag = ({ background, text }) => {
  return (
    <>
      <div className={classes.Tag} style={{ background }}>
        #{text}
      </div>
    </>
  );
};
