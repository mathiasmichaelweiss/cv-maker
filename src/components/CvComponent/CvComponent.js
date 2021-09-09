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
  let componentContainerClasses = [classes.CvComponent];
  let plusBtnClasses = [classes.Plus];

  if (!isClosed) {
    componentContainerClasses.push(classes.Active);
  }

  if (isClosed && componentContainerClasses.length >= 2) {
    componentContainerClasses = [classes.CvComponent];
  }

  if (isAddOnce && isAdded) {
    componentContainerClasses.push(classes.Added);
    plusBtnClasses.push(classes.DisabledBtn);
  }

  return (
    <>
      {isAddOnce && isAdded ? (
        <div className={componentContainerClasses.join(' ')}>
          <ReactSVG src={svg} />
          <div className={classes.TextContent}>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Description}>{description}</p>
          </div>
          <div className={plusBtnClasses.join(' ')}>+</div>
        </div>
      ) : (
        <>
          {isClosed ? (
            <div className={componentContainerClasses.join(' ')}>
              <ReactSVG src={svg} />
              <div className={classes.TextContent}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{description}</p>
              </div>
              <div
                className={plusBtnClasses.join(' ')}
                onClick={() => openComponent(component)}
              >
                +
              </div>
            </div>
          ) : (
            <div className={componentContainerClasses.join(' ')}>
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
