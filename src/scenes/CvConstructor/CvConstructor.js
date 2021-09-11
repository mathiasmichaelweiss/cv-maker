import classes from './CvConstructor.module.css';
import { CvComponent } from '../../components/CvComponent/CvComponent';
import { useState } from 'react';
import { ScrollingWindow } from '../../components/ScrollingWindow/ScrollingWindow';

export const CvConstructor = ({
  addedComponents,
  setAddedComponents,
  components,
  setComponents
}) => {
  const openComponent = component => {
    setComponents([...components]);
    component.isClosed = false;
  };

  const addComponent = (
    svg,
    name,
    component,
    type,
    secondName,
    beginningYear,
    endingYear,
    about
  ) => {
    if (type === 'company') {
    }
    setAddedComponents([
      ...addedComponents,
      {
        svg: svg,
        name: name,
        type: type,
        secondName: secondName,
        beginningYear: beginningYear,
        endingYear: endingYear,
        about: about
      }
    ]);
    component.isAdded = true;
    component.isClosed = true;
  };

  console.log(addedComponents);

  const removeComponent = (component, idx) => {
    const index = addedComponents.indexOf(component);
    const before = addedComponents.slice(0, index);
    const after = addedComponents.slice(index + 1);

    const newArr = [...before, ...after];
    console.log(components[idx]);

    components[idx].isAdded = false;

    setAddedComponents(newArr);
  };

  const componentsLeftBlock = components.filter((component, id) => id <= 5);
  const componentsRightBlock = components.filter((component, id) => id > 5);

  return (
    <>
      <div className={classes.CvConstructor}>
        <h3>Add Components</h3>
        <div className={classes.ComponentsContainer}>
          <div className={classes.ContainerLeftBlock}>
            {componentsLeftBlock.map((component, id) => {
              return (
                <CvComponent
                  key={id}
                  component={component}
                  isAddOnce={component.addOnce}
                  isAdded={component.isAdded}
                  svg={component.svg}
                  title={component.title}
                  description={component.description}
                  addComponent={addComponent}
                  openComponent={openComponent}
                  isClosed={component.isClosed}
                />
              );
            })}
          </div>
          <div className={classes.ContainerRightBlock}>
            {componentsRightBlock.map((component, id) => {
              return (
                <CvComponent
                  key={id}
                  component={component}
                  isAddOnce={component.addOnce}
                  isAdded={component.isAdded}
                  svg={component.svg}
                  title={component.title}
                  description={component.description}
                  addComponent={addComponent}
                  openComponent={openComponent}
                  isClosed={component.isClosed}
                />
              );
            })}
          </div>
        </div>
        <ScrollingWindow
          addedComponents={addedComponents}
          removeComponent={removeComponent}
        />
      </div>
    </>
  );
};
