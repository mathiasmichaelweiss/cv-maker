import classes from './AddedComponent.module.css';
import { ReactSVG } from 'react-svg';

export const AddedComponent = ({ addedComponent, removeComponent, index }) => {
  const { type } = addedComponent;

  let shrtName = addedComponent.name;

  if (type === 'linkedin' || (type === 'facebook' && shrtName.length >= 17)) {
    shrtName = shrtName.split('').splice(24).join('');
  }

  if (shrtName.length >= 20) {
    shrtName = shrtName.split('').slice(0, 20).join('') + '...';
  }

  return (
    <>
      <div className={classes.AddedComponent}>
        <ReactSVG src={addedComponent.svg} />
        <p>{shrtName}</p>
        <div
          className={classes.Minus}
          onClick={() => removeComponent(addedComponent, index)}
        >
          -
        </div>
      </div>
    </>
  );
};
