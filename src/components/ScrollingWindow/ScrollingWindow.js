import classes from './ScrollingWindow.module.css';
import { AddedComponent } from '../addedComponent/AddedComponent';

export const ScrollingWindow = ({ addedComponents, removeComponent }) => {
  return (
    <>
      <div className={classes.ScrollingWindow}>
        {addedComponents.length > 0
          ? addedComponents.map((addedComponent, id) => {
              return (
                <AddedComponent
                  addedComponent={addedComponent}
                  index={id}
                  key={id}
                  removeComponent={removeComponent}
                />
              );
            })
          : null}
      </div>
    </>
  );
};
