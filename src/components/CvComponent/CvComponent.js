import classes from './CvComponent.module.css';
import { ReactSVG } from 'react-svg';

export const CvComponent = ({
  svg,
  title,
  description,
  addComponent,
  isAddOnce,
  isAdded,
  component,
  openComponent,
  isClosed
}) => {
  let componentClasses = [classes.CvComponent];

  if (!isClosed) {
    componentClasses.push(classes.Active);
  }

  if (isClosed && componentClasses.length >= 2) {
    componentClasses = [classes.CvComponent];
  }

  return (
    <>
      {isAddOnce && isAdded ? (
        <div className={componentClasses.join(' ')}>
          <ReactSVG src={svg} />
          <div className={classes.TextContent}>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Description}>{description}</p>
          </div>
          <div className={classes.Plus}>+</div>
        </div>
      ) : (
        <>
          {isClosed ? (
            <div className={componentClasses.join(' ')}>
              <ReactSVG src={svg} />
              <div className={classes.TextContent}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{description}</p>
              </div>
              <div
                className={classes.Plus}
                onClick={() => openComponent(component)}
              >
                +
              </div>
            </div>
          ) : (
            <div className={componentClasses.join(' ')}>
              <ReactSVG src={svg} />
              <div className={classes.TextContent}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{description}</p>
              </div>
              <div
                className={classes.PlusBotton}
                onClick={() => addComponent(svg, title, component)}
              >
                +
              </div>
              <div className={classes.OpenedComponent}>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
