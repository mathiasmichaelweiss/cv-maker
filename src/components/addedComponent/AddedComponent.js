import classes from './AddedComponent.module.css';
import { ReactSVG } from 'react-svg';

export const AddedComponent = ({ addedComponent, removeComponent }) => {
  return (
    <>
      <div className={classes.AddedComponent}>
        <ReactSVG src={addedComponent.svg} />
        <p>{addedComponent.title}</p>
        <div
          className={classes.Minus}
          onClick={() => removeComponent(addedComponent)}
        >
          -
        </div>
      </div>
    </>
  );
};
